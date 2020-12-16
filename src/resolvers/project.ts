/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getConnection, getManager } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import {
  ReportSummaryType,
  ProjectReturnType,
  ProjectPermissionReturnType,
  TasksByAssignee,
  ObjectIFC,
} from "./types/ProjectResponse";

/* Entities */
import mailSender from "../services/mailerService";
import Project from "../entities/Project";
import User from "../entities/User";
import ProjectPermission from "../entities/ProjectPermission";
import Board from "../entities/Board";

/* Utils */
import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";

/* Middleware */
import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
import checkAdminPermission from "../middleware/checkAdminPermission";

@Resolver()
export class ProjectResolver {
  @Query(() => ProjectReturnType)
  // @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async project(
    @Arg("projectId") projectId: string
  ): Promise<ProjectReturnType> {
    // const projectId = prod
    //   ? context.req.query.projectId
    //   : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne({
        where: { id: projectId },
        relations: ["projectPermissions", "projectPermissions.user"],
      });

      if (project) return { project };

      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Query(() => ReportSummaryType)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async reportSummary(
    @Arg("projectId") projectId: string
  ): Promise<ReportSummaryType> {
    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne(projectId, {
        relations: [
          "projectPermissions",
          "projectPermissions.project",
          "projectPermissions.user",
          "projectPermissions.user.userTask",
          "projectPermissions.user.userTask.task",
          "task",
          "task.board",
          "task.project",
          "task.userTask",
          "task.userTask.user",
        ],
      });

      // project.projectPmierssions.user (프로젝트에 속한 모든 사람의 숫자)
      // if (project?.projectPermissions) {
      //   console.log(
      //     "------project.projectPermissions",
      //     project.projectPermissions
      //   );
      // }

      if (project?.task) {
        const totalTasks = project?.task;
        const totalTasksCount = totalTasks.length;
        const completedTasks = project?.task?.filter(
          (task) => task.completed === true
        );
        const completedTasksCount = completedTasks.length;
        const incompleteTasks = project?.task?.filter(
          (task) => task.completed === false
        );
        const incompleteTasksCount = incompleteTasks.length;

        const overdueTasks = project?.task?.filter((task) => {
          if (task.endDate && !task.completed) {
            return task.endDate.getTime() < new Date().getTime();
          }
          return false;
        });
        const overdueTasksCount = overdueTasks.length;

        const tasksByAssignee: TasksByAssignee[] = [];

        if (project?.projectPermissions) {
          project.projectPermissions.forEach((projectPermission) => {
            if (typeof projectPermission.user !== "string") {
              const object: TasksByAssignee = {
                userId: projectPermission.user.id,
                username: projectPermission.user.username,
                avatar: projectPermission.user.avatar,
                totalTasksCount: projectPermission.user.userTask.length,
                completedTasksCount: projectPermission.user.userTask.filter(
                  (userTask) => (userTask.task.completed = true)
                ).length,
                incompleteTasksCount: projectPermission.user.userTask.filter(
                  (userTask) => (userTask.task.completed = false)
                ).length,
                overdueTasksCount: projectPermission.user.userTask.filter(
                  (userTask) => {
                    if (userTask.task.endDate && !userTask.task.completed) {
                      return (
                        userTask.task.endDate.getTime() < new Date().getTime()
                      );
                    }
                    return false;
                  }
                ).length,
              };
              tasksByAssignee.push(object);
            }
          });
        }
        /*
        incompleteTasksByStatus
        project.task
          todo: taskcount
          doing: taskcount
          done : taskcount

          filter -> countTodo
          filter -> task.count === task.board.status todo

          */

        // NOTE 광주/판교 시민의 피가 뭍혀진 것이니 절대 지우지 마시오 O/<-<
        const incompleteTaskStatus: ObjectIFC = {};

        if (project.task) {
          project.task.forEach((task) => {
            if (task.board && !incompleteTaskStatus[task.board.title]) {
              incompleteTaskStatus[task.board.title] = 1;
            } else if (task.board && incompleteTaskStatus[task.board.title]) {
              incompleteTaskStatus[task.board.title] += 1;
            }
          });
        }

        const taskCountSummary = {
          totalTasksCount,
          completedTasksCount,
          incompleteTasksCount,
          overdueTasksCount,
        };

        // const taskByAssignee = honey;

        if (project)
          return { taskCountSummary, tasksByAssignee, incompleteTaskStatus };
      }

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
      : "11908f55-9650-4c52-8605-e56fa35ce4ed";

    const user = await User.findOne(userId);

    try {
      let project;
      await getConnection().transaction(async (tm) => {
        project = Project.create({
          id: uuidV4(),
          name,
        });

        let projectPermission;
        if (user && project) {
          projectPermission = ProjectPermission.create({
            user,
            project: project.id,
            isAdmin: true,
          });
        }

        const todo = Board.create({
          title: "To Do",
          project,
          boardColumnIndex: 0,
        });

        const inProgress = Board.create({
          title: "In Progress",
          project,
          boardColumnIndex: 1,
        });

        const done = Board.create({
          title: "Done",
          project,
          boardColumnIndex: 2,
        });

        await tm.save(project);
        await tm.save(projectPermission);
        await tm.save(todo);
        await tm.save(inProgress);
        await tm.save(done);
      });

      return { project };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkProjectPermission,
  //   checkAdminPermission,
  // ])
  async updateProjectName(
    @Arg("name") name: string,
    @Arg("projectId") projectId: string
  ): Promise<ProjectReturnType> {
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
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkIfGuest,
  //   checkProjectPermission,
  //   checkAdminPermission,
  // ])
  async updateProjectPermission(
    @Arg("userId") userId: string,
    @Arg("isAdmin") isAdmin: boolean,
    @Arg("projectId") projectId: string
  ): Promise<ProjectPermissionReturnType> {
    const em = getManager();

    try {
      if (userId && typeof isAdmin === "boolean") {
        const projectPermission = await em.findOne(ProjectPermission, {
          where: { user: userId, project: projectId },
          relations: ["project", "project.projectPermissions"],
        });

        if (projectPermission) {
          projectPermission.isAdmin = isAdmin;
          await em.save(projectPermission);
          return { projectPermission };
        }
      }
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async deleteProject(
    @Arg("projectId") projectId: string
  ): Promise<ProjectReturnType> {
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
    @Arg("emails", () => [String]) emails: string[],
    @Arg("projectId") projectId: string
  ): Promise<ProjectReturnType | undefined> {
    if (!emails.length) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }

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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async deleteMember(
    @Arg("userId") userId: string,
    @Arg("projectId") projectId: string
  ): Promise<ProjectPermissionReturnType> {
    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      const projectPermission = await ProjectPermission.findOne({
        where: { user: userId, project: projectId },
      });

      if (projectPermission) {
        await ProjectPermission.delete(projectPermission.id);
      }

      return { success: true };
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
