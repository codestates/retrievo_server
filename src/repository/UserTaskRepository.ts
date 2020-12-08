import { EntityRepository, getManager, Repository } from "typeorm";
import User from "../entities/User";
import Task from "../entities/Task";
import UserTask from "../entities/UserTask";
import UserTaskResponse from "../resolvers/types/UserTaskResponse";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import ProjectPermission from "../entities/ProjectPermission";
import TaskNotification, {
  taskNotificationType,
} from "../entities/TaskNotification";

@EntityRepository(UserTask)
export class UserTaskRepository extends Repository<UserTask> {
  async createAndSendNotification(
    userId: string,
    taskId: string
  ): Promise<UserTaskResponse> {
    try {
      const em = getManager();
      const transactionRes = await em.transaction(
        async (transactionalEntityManager) => {
          const task = await Task.findOne({
            where: { id: taskId },
            relations: ["project"],
          });
          if (!task) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

          const isUserPermission = await ProjectPermission.find({
            user: userId,
            project: task.project,
          });

          if (!isUserPermission)
            return {
              error: generateError(
                errorKeys.AUTH_NOT_PERMISSION,
                "assignedUser"
              ),
            };

          const user = await User.findOne({ id: userId });
          if (!user)
            return { error: generateError(errorKeys.AUTH_NOT_FOUND, "user") };

          const isAlreadyAssigned = await UserTask.findOne({
            where: { user, task },
          });

          if (isAlreadyAssigned)
            return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

          const tempUserTask = await em.create(UserTask, { task, user });
          await transactionalEntityManager.save(tempUserTask);

          if (!tempUserTask)
            return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

          const tempNotification = await em.create(TaskNotification, {
            target: user,
            type: taskNotificationType.CREATED,
            project: task.project,
            task,
          });
          await transactionalEntityManager.save(tempNotification);
          return true;
        }
      );

      if (transactionRes === true) {
        const groupOfUserTasks = await UserTask.find({
          where: { task: taskId },
          relations: ["task", "user"],
        });
        return { userTask: groupOfUserTasks }; // FIXME
      }
      return transactionRes;
    } catch (err) {
      console.log("UserTask create Mutation error:", err);
      if (err.code === "22P02") {
        return { error: generateError(errorKeys.AUTH_NOT_FOUND, "user") };
      }
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default UserTaskRepository;
