import { Resolver, Arg, Mutation, UseMiddleware } from "type-graphql";
import { getCustomRepository } from "typeorm";

/* Entities */
import UserTask from "../entities/UserTask";
import { UserTaskRepository } from "../repository/UserTaskRepository";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import UserTaskResponse from "./types/UserTaskResponse";

// /* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkProjectPermission from "../middleware/checkProjectPermission";

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

  @Mutation(() => Boolean)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async deleteUserTask(@Arg("id") id: string): Promise<boolean> {
    try {
      const deletedRes = await UserTask.delete(id);
      if (!deletedRes.affected) return false;
      return true;
    } catch (err) {
      console.log("UserTask delete Mutation error catch:", err);
      return false;
    }
  }
}

export default UserTaskResolver;
