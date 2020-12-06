import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getManager } from "typeorm";
import { v4 as uuidV4 } from "uuid";

/* Entities */
import mailSender from "../services/mailerService";
import Project from "../entities/Project";
import User from "../entities/User";
import ProjectPermission from "../entities/ProjectPermission";

/* Utils */
import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import {
  ProjectReturnType,
  ProjectPermissionReturnType,
} from "./types/ProjectResponse";

/* Middleware */
import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
import checkAdminPermission from "../middleware/checkAdminPermission";

@Resolver()
export class ProjectResolver {
  @Query(() => ProjectReturnType)
  @UseMiddleware(checkAuthStatus)
  async project(@Ctx() context: MyContext): Promise<ProjectReturnType> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne({ where: { id: projectId } });
      if (project) return { project };

      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  @UseMiddleware([checkAuthStatus, checkIfGuest])
  async createProject(
    @Arg("name") name: string,
    @Ctx() context: MyContext
  ): Promise<ProjectReturnType> {
    // const userId = prod
    //   ? context.req.session.passport?.user
    //   : "fd6d4c47-f09d-4ecf-8d30-d4bd39ef7690";

    const userId = context.req.session.passport?.user;
    const user = await User.findOne(userId);

    try {
      const project = await Project.create({
        name,
      }).save();

      if (user && project) {
        await ProjectPermission.create({
          user,
          project,
          isAdmin: true,
        }).save();
      }

      return { project };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  @UseMiddleware([
    checkAuthStatus,
    checkIfGuest,
    checkProjectPermission,
    checkAdminPermission,
  ])
  async updateProjectName(
    @Ctx() context: MyContext,
    @Arg("name") name: string
  ): Promise<ProjectReturnType> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    const em = getManager();
    const project = await em.findOne(Project, projectId);

    try {
      if (name && project) {
        project.name = name;
        await em.save(project);
        return { project };
      }

      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectPermissionReturnType)
  @UseMiddleware([
    checkAuthStatus,
    checkIfGuest,
    checkProjectPermission,
    checkAdminPermission,
  ])
  async updateProjectPermission(
    @Ctx() context: MyContext,
    @Arg("userId") userId: string,
    @Arg("isAdmin") isAdmin: boolean
  ): Promise<ProjectPermissionReturnType> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";
    const em = getManager();

    try {
      if (userId && typeof isAdmin === "boolean") {
        const projectPermission = await em.findOne(ProjectPermission, {
          where: { user: userId, project: projectId },
        });

        if (projectPermission) {
          projectPermission.isAdmin = isAdmin;
          await em.save(projectPermission);
          return projectPermission;
        }
      }
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  @UseMiddleware([
    checkAuthStatus,
    checkIfGuest,
    checkProjectPermission,
    checkAdminPermission,
  ])
  async deleteProject(@Ctx() context: MyContext): Promise<ProjectReturnType> {
    const projectId = prod
      ? context.req.query.projectId
      : "f79d26af-b391-478c-97c7-59a84a25eb7d";
    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await Project.delete(projectId);
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  async inviteUser(
    @Ctx() context: MyContext,
    @Arg("emails", () => [String]) emails: string[]
  ): Promise<ProjectReturnType | undefined> {
    if (!emails.length) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }

    const projectId = prod
      ? context.req.query?.projectId
      : "1e8eeabb-1e14-4881-8d22-6473fdbb4607";

    const { redis } = context;
    const project = await Project.findOne(projectId);
    if (!project) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    const projectName = project.name;
    const senderName = "Retrievo Team";
    const URI = "https://retrievo.io/invitation/";

    try {
      const data = emails.map(async (email: string) => {
        const user = await User.findOne({ where: { email } });

        if (user) {
          const projectPermission = await ProjectPermission.findOne({
            where: { user, project },
          });

          if (projectPermission) {
            return { error: generateError(errorKeys.PERMISSION_ALREADY_EXIST) };
          }
        }

        const keyToken = uuidV4();
        await redis.set(keyToken, projectId, "ex", 86400);

        await mailSender({
          email,
          senderName,
          projectName,
          invitationLink: URI + keyToken,
        });

        return project;
      });

      return Promise.all(data).then(() => {
        return { success: true };
      });
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  async routeInvitation(
    @Ctx() context: MyContext
  ): Promise<ProjectReturnType | undefined> {
    const { redis, res, req } = context;
    const keyToken = prod
      ? JSON.stringify(context.req.params)
      : "478007b3-7821-4c55-ba5c-867499386639"; // TODO Key Token을 입력할 것

    try {
      const projectId = await redis.get(keyToken);
      let project;
      if (projectId) {
        project = await Project.findOne(projectId);
      }

      const URI = "https://retrievo.io/project/";

      const currentUser = context.req.session?.passport?.user;

      let user;
      if (currentUser) {
        user = await User.findOne(currentUser);
      }

      /*
      ANCHOR 이미 로그인 된 유저인 경우
      1. 중복된 초대를 걸러준다.
      2. 처음 받는 초대라면, ProjectPermission 을 만들어준다.
      3. permission이 만들어지는데 성공한다면 redis 에서 토큰을 지워준다.
      4. 해당 프로젝트의 uri 로 전송

      */
      if (user && project) {
        const projectPermission = await ProjectPermission.findOne({
          where: {
            user,
            project,
          },
        });

        if (projectPermission) {
          return { error: generateError(errorKeys.PERMISSION_ALREADY_EXIST) };
        }

        await ProjectPermission.create({
          user,
          project,
          isAdmin: true,
        }).save();
        await redis.del(keyToken);
        res.redirect(URI + projectId);
        return { success: true };
      }

      /*
    ANCHOR 존재하는 유저지만 로그인이 안된 경우 || 가입이 안 된 유저
    1. req.session에 projectId를 저장
    2. Login 페이지로 이동
    */
      if (projectId) {
        req.session.projectId = projectId;
        req.session.invitationToken = keyToken;

        res.redirect("https://retrievo.io/login");
        return { success: true };
      }
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
    return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  }
}

export default ProjectResolver;
