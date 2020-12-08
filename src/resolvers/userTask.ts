import {
  Resolver,
  // Ctx,
  Arg,
  // Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getCustomRepository } from "typeorm";

/* Entities */
// import Task from "../entities/Task";
// import UserTask from "../entities/UserTask";
// import ProjectPermission from "../entities/ProjectPermission";
// import User from "../entities/User";

/* Utils */
// import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
// import { MyContext } from "../types";
import UserTaskResponse from "./types/UserTaskResponse";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
import { UserTaskRepository } from "../repository/UserTaskRepository";
// import checkAdminPermission from "../middleware/checkAdminPermission";
// import checkProjectPermission from "../middleware/checkProjectPermission";

// TODO : notification
@Resolver()
export class UserTaskResolver {
  @Mutation(() => UserTaskResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async createUserTask(
    @Arg("userId") userId: string,
    @Arg("taskId") taskId: string
  ): Promise<UserTaskResponse> {
    try {
      const userTaskRepository = getCustomRepository(UserTaskRepository);
      const res = await userTaskRepository.createAndSendNotification(
        userId,
        taskId
      );

      if (!res)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      console.log("res", res);
      return res;
    } catch (err) {
      console.log("UserTask create Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  // @Mutation(() => Boolean)
  // @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  // async deletaTask(@Arg("id") id: string): Promise<boolean> {
  //   try {
  //     const taskRepository = getCustomRepository(TaskRepository);
  //     return await taskRepository.deleteTaskAndChangeIndice(id);
  //   } catch (err) {
  //     console.log("Board delete Mutation error catch:", err);
  //     return false;
  //   }
  // }
}

export default UserTaskResolver;
