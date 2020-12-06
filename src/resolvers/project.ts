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
      return { deleted: true };
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

  /*
  1. 유저가 화면에서 초대를 보낸다. ->
  2. ProjectId(uri) 와 초대대상의 email를 arg로써 inviteuser resolver 에서 받는다. ->
  3. email 로 db에 유저가 존재하는지 조회한다.

  4. 만약 db에 유저가 존재한다면
      projectpermission 을 검색해서 userid projectid 의 관계가 존재하는지 중복조회한다
        if 중복된다면,
          에러메시지를 날린다.
        if 중복되지 않았다면
          project permission을 만든다(arg로 받은 projectid 와 유저를 조회할 때 취득한 userid)
          해당 유저에게 projectid 를 access uri 에 참조하여 Email 을 보낸다.

  5. 만약 db에 유저가 존재하지않는다면;
  (sets)
    초대를 보내는이가 초대 버튼을 클릭했을 때 벌어지는 과정들:

    과정 1 $redis.smembers("email")
    => ["88bb4bdfef", "73dbfac453"]

    과정 2 해당 배열에 같은 project값이 있는지 조회

      if true
      중복된 초대라는 에러메시지를 보낸다

      if false
        1. 해당 유저에게 projectid 를 access uri 에 참조하여 Email 을 보낸다.
        2. $redis.sadd("email", ["projectid1", "project2"])
        3. 유저가 해당 링크를 클릭했을 때 projectid 와 유저 이메일 session 에 집어넣고
        4. 만약 이메일 세션에 있는 아이디가 redis set 에 저장된 정보를 조회 (register 로직에 들어가야함)
            if true
              유저가 가입할 때 세션에 projectid(invitation) 이 존재한다면 projectPermission 을 동시에 만들어 주어야함
              소셜 로그인일 경우에도 소셜 콜백에 projectPermission 을 만드는 로직을 포함시켜야함.
            if false
              잘못된 초대코드라는 오류메시지를 보여줌







  */
  //   // if (email.length === 1) {
  //   // }
  //   // doesUserExist = User.findOne({ where: { email } });
  // }
}

export default ProjectResolver;
