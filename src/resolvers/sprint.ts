import { Resolver, Arg, Query, Mutation, UseMiddleware } from "type-graphql";

/* Entities */
import { getConnection, getRepository } from "typeorm";
import Board from "../entities/Board";
import Sprint from "../entities/Sprint";
import SprintNotification, {
  sprintNotificationType,
} from "../entities/SprintNotification";
import Task from "../entities/Task";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import SprintResponse from "./types/SprintResponse";
import { SprintOptionInput } from "./types/SprintOptionInput";
import sprintRowDnd from "../utils/sprintRowDnd";

/* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
import checkAdminPermission from "../middleware/checkAdminPermission";
// import StartedSprintResonse from "./types/StartedSprintResponse";
@Resolver()
export class SprintResolver {
  @Query(() => SprintResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async getSprint(@Arg("id") id: string): Promise<SprintResponse> {
    try {
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
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async getSprints(
    @Arg("projectId") projectId: string
  ): Promise<Sprint[] | SprintResponse> {
    try {
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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async createSprint(
    @Arg("title") title: string,
    @Arg("projectId") projectId: string
  ): Promise<SprintResponse> {
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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async updateSprint(
    @Arg("options") options: SprintOptionInput,
    @Arg("projectId") projectId: string
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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async deleteSprint(
    @Arg("projectId") projectId: string,
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
      console.log("projectId", projectId);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async readSprintNotification(
    @Arg("projectId") projectId: string,
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
      console.log("projectId", projectId);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Query(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async getStartedSprint(
    @Arg("projectId") projectId: string
  ): Promise<SprintResponse> {
    try {
      const sprint = await Sprint.find({
        where: { project: projectId, didStart: true },
      });
      console.log("sprint", sprint);
      if (!sprint) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { sprint: sprint[0] };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default SprintResolver;
