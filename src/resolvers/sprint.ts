import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
// import { getCustomRepository } from "typeorm";
// import { getManager } from "typeorm";

/* Entities */
// import User from "../entities/User";
import { getConnection, getRepository } from "typeorm";
import Board from "../entities/Board";
import Sprint from "../entities/Sprint";
import SprintNotification, {
  sprintNotificationType,
} from "../entities/SprintNotification";
import Task from "../entities/Task";

// import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
import { prod } from "../constants";

/* Types */
import { MyContext } from "../types";
import SprintResponse from "./types/SprintResponse";
import { SprintOptionInput } from "./types/SprintOptionInput";
import sprintRowDnd from "../utils/sprintRowDnd";

// /* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
import checkAdminPermission from "../middleware/checkAdminPermission";
@Resolver()
export class SprintResolver {
  @Query(() => SprintResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async getSprint(@Arg("id") id: string): Promise<SprintResponse> {
    try {
      // const projectId = prod
      //   ? req.params
      //   : "332053e6-45cd-4104-92db-000154a1af32";,

      const sprint = await Sprint.findOne(id, {
        relations: [
          "task",
          "task.sprint",
          "task.userTask",
          "task.userTask.user",
          "task.taskLabel",
          "task.taskLabel.label",
          "task.board",
          "sprintNotification",
          "sprintNotification.sprint",
          "project",
          "project.sprint",
        ],
      });

      if (!sprint) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      return { sprint };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Query(() => SprintResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission]) // FIXME : checkProjectPermission
  async getSprints(
    @Ctx() { req }: MyContext
  ): Promise<Sprint[] | SprintResponse> {
    try {
      const projectId = prod
        ? req.params
        : "332053e6-45cd-4104-92db-000154a1af32";

      const sprints = await Sprint.find({
        where: { project: projectId },
        relations: [
          "task",
          "task.sprint",
          "task.userTask",
          "task.userTask.user",
          "task.taskLabel",
          "task.taskLabel.label",
          "task.board",
          "sprintNotification",
          "sprintNotification.sprint",
          "project",
          "project.sprint",
        ],
      });

      if (!sprints) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      return { sprints };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  @UseMiddleware([
    checkAuthStatus,
    checkProjectPermission,
    checkAdminPermission,
  ]) // FIXME : checkProjectPermission
  async createSprint(
    @Arg("title") title: string,
    @Ctx() context: MyContext
  ): Promise<SprintResponse> {
    const { req } = context;

    const projectId = prod
      ? req.params.projectId
      : "332053e6-45cd-4104-92db-000154a1af32";

    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      const sprints = await Sprint.find({
        where: { project: projectId },
        relations: ["project"],
      });

      const row = sprints.length ? sprints.length - 1 : 0;

      const sprint = await Sprint.create({
        title,
        row,
        project: projectId,
      }).save();

      return { sprint };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkProjectPermission,
  //   checkAdminPermission,
  // ])
  async updateSprint(
    @Arg("options") options: SprintOptionInput,
    @Ctx() context: MyContext
  ): Promise<SprintResponse | undefined> {
    const {
      id,
      title,
      description,
      didStart,
      isCompleted,
      row,
      dueDate,
      startedAt,
    } = options;

    try {
      const sprintRepository = getRepository(Sprint);
      const sprint = await sprintRepository.findOne(id);
      const { req } = context;
      const projectId = prod
        ? req.params.projectId
        : "c77cc15c-739a-4ef4-9e6c-fd43eb0d75a9";

      if (!projectId || !sprint)
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      /* 일반 D&D 경우 */
      if (typeof row === "number") {
        if (!sprint.didStart) return await sprintRowDnd(row, sprint, projectId);
        return { error: generateError(errorKeys.BAD_REQUEST) };
      }

      if (!row) {
        if (title) sprint.title = title;
        if (description) sprint.description = description;
        if (startedAt) sprint.startedAt = startedAt;
        if (dueDate) sprint.dueDate = dueDate;
        if (typeof didStart === "boolean") {
          const tasks = await Task.find({
            where: { sprint: id },
            relations: ["board", "board.task"],
          });

          const board = await Board.findOne({
            where: { boardColumnIndex: 0, project: projectId },
          });

          const sprints = await sprintRepository.find({
            where: { project: projectId },
          });

          const taskRepository = getRepository(Task);
          if (didStart) {
            tasks.map(async (task, index) => {
              const newTask = Object.assign(task, {
                board: board?.id,
                boardRowIndex: index,
              });
              await taskRepository.save(newTask);
            });

            sprints.map(async (task) => {
              return await Sprint.update(task, { didStart: !didStart });
            });

            sprint.didStart = didStart;

            getConnection().transaction(async (tm) => {
              const sprintNotification = SprintNotification.create({
                sprint,
                project: projectId,
                type: sprintNotificationType.SPRINT_START,
              });
              await tm.save(sprintNotification);
              await sprintRepository.save(sprint);
            });

            return await sprintRowDnd(0, sprint, projectId);
          }

          /* didStart 가 false */
          tasks.map(async (task) => {
            const newTask = Object.assign(task, {
              board: null,
              boardRowIndex: null,
            });
            await taskRepository.save(newTask);
          });

          sprint.didStart = didStart;
        }

        if (isCompleted) {
          if (!sprint.didStart) {
            return { error: generateError(errorKeys.BAD_REQUEST) };
          }
          sprint.isCompleted = isCompleted;
          const taskRepository = getRepository(Task);
          const tasks = await taskRepository.find({
            where: { sprint: sprint.id },
          });
          tasks.map(async (task) => {
            const newTask = Object.assign(task, {
              board: null,
              boardRowIndex: null,
            });
            await taskRepository.save(newTask);
          });

          getConnection().transaction(async (tm) => {
            const sprintNotification = SprintNotification.create({
              sprint,
              project: projectId,
              type: sprintNotificationType.SPRINT_END,
            });
            await tm.save(sprintNotification);
            await sprintRepository.save(sprint);
          });
        }
      }
      await sprintRepository.save(sprint);
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  @UseMiddleware([
    checkAuthStatus,
    checkProjectPermission,
    checkAdminPermission,
  ])
  async deleteSprint(
    // @Ctx() context: MyContext,
    @Arg("id") id: string
  ): Promise<SprintResponse> {
    const sprint = await Sprint.findOne(id);

    if (!sprint) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await Sprint.delete(sprint);
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async readSprintNotification(
    // @Ctx() context: MyContext,
    @Arg("id") id: string
  ): Promise<SprintResponse> {
    const sprintNotification = await SprintNotification.findOne(id);

    if (!sprintNotification) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await SprintNotification.update(sprintNotification.id, { isRead: true });
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default SprintResolver;
