import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getManager } from "typeorm";

/* Entities */
import Project from "../entities/Project";
import User from "../entities/User";
import ProjectPermission from "../entities/ProjectPermission";

/* Utils */
import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import { FieldError } from "./types/UserResponse";
import { ProjectReturnType } from "./types/ProjectResponse";

/* Middleware */
import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
import checkAdminPermission from "../middleware/checkAdminPermission";

@Resolver()
export class ProjectResolver {
  @Query(() => Project)
  @UseMiddleware(checkAuthStatus)
  async project(
    @Ctx() context: MyContext
  ): Promise<Project | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne({ where: { id: projectId } });
      return project || { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Project)
  @UseMiddleware([checkAuthStatus, checkIfGuest])
  async createProject(
    @Arg("name") name: string,
    @Ctx() context: MyContext
  ): Promise<Project | { error: FieldError }> {
    const userId = prod
      ? context.req.session.passport?.user
      : "fd6d4c47-f09d-4ecf-8d30-d4bd39ef7690";
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

      return project;
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Project)
  @UseMiddleware([
    checkAuthStatus,
    checkIfGuest,
    checkProjectPermission,
    checkAdminPermission,
  ])
  async updateProjectName(
    @Ctx() context: MyContext,
    @Arg("name") name: string
  ): Promise<Project | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    const em = getManager();
    const project = await em.findOne(Project, projectId);

    try {
      if (name && project) {
        project.name = name;
        await em.save(project);
        return project;
      }

      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectPermission)
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
  ): Promise<ProjectPermission | { error: FieldError }> {
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
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkIfGuest,
  //   checkProjectPermission,
  //   checkAdminPermission,
  // ])
  async deleteProject(
    @Ctx() context: MyContext
  ): Promise<ProjectReturnType | undefined> {
    const projectId = prod
      ? context.req.query.projectId
      : "f79d26af-b391-478c-97c7-59a84a25eb7d";
    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await Project.delete(projectId);
      return { field: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  // @Mutation(() => ProjectReturnType)
  // async inviteUser(
  //   @Ctx() context: MyContext,
  //   @Arg("email") email: string[]
  // ): Promise<ProjectReturnType | undefined> {
  //   const projectId = prod
  //     ? context.req.query.projectId
  //     : "c3645246-2095-4f34-b848-4d91735f5e7d";

  //   if (!projectId) {
  //     return { error: generateError(errorKeys.DATA_NOT_FOUND) };
  //   }

  //   // if (email.length > 1) {
  //   //   for await (const singleEmail of email) {
  //   //     const userOfUsers = User.findOne({ where: { email: singleEmail } });

  //   //     console.log(userOfUsers);
  //   //     // return { error: generateError.INTERNAL_SERVER_ERROR };
  //   //     // 1) 존재하는 유저인 지 확인
  //   //     // 1-1) 존재하는 유저일 경우
  //   //     // 1-1-1) 이미 초대 받은 유저인지를 확인해야한다.
  //   //     // 1-1-2) 이미 초대 받은 유저일 경우, 400 Bad Request 반환
  //   //     // 1-1-3) 이미 초대 받지 않은 경우, project_permission 생성 및 sendEmail

  //   //     // 2) 존재하지 않는 유저일 경우
  //   //   }
  //   // }

  //   // if (email.length === 1) {
  //   // }
  //   // doesUserExist = User.findOne({ where: { email } });
  // }
}

export default ProjectResolver;
