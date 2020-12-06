import {
  Resolver,
  // Ctx,
  Arg,
  Query,
  // Mutation,
  UseMiddleware,
} from "type-graphql";
// import { getCustomRepository } from "typeorm";

/* Entities */
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import Project from "../entities/Project";
import Task from "../entities/Task";

/* Utils */
// import { prod } from "../constants";
// import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
// import { MyContext } from "../types";
import TaskResponse from "./types/TaskResponse";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkAdminPermission from "../middleware/checkAdminPermission";
// import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class TaskResolver {
  @Query(() => TaskResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async task(@Arg("id") id: string): Promise<TaskResponse> {
    try {
      const task = await Task.findOne({
        where: { id },
        relations: [
          "board",
          "sprint",
          "userTask",
          "userTask.user",
          "taskLabel",
          "taskLabel.label",
          "file",
          "comment",
          "comment.user",
        ],
      });
      if (!task) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { task: [task] };
    } catch (err) {
      console.log("Task Read Query Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  // @Mutation(() => BoardResponse)
  // @UseMiddleware([checkAuthStatus, checkIfGuest, checkAdminPermission]) // FIXME : checkProjectPermission
  // async createTask(
  //   @Arg("title") title:
  //   @Ctx() { req }: MyContext
  // ): Promise<BoardResponse> {
  //   try {
  //   } catch (err) {
  //     console.log("Board create Mutation error:", err);
  //     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  //   }
  // }
}

export default TaskResolver;
