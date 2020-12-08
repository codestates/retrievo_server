import { Resolver, Ctx, Arg, Mutation, UseMiddleware } from "type-graphql";
import { getManager } from "typeorm";

/* Entities */
import UserTask from "../entities/UserTask";
import Task from "../entities/Task";
import User from "../entities/User";
import Project from "../entities/Project";
import Comment from "../entities/Comment";
import CommentNotification from "../entities/CommentNotification";

/* Utils */
// import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
import CommentResponse from "./types/CommentResponse";
import CommentCreateInput from "./types/CommentCreateInput";
// import checkAdminPermission from "../middleware/checkAdminPermission";
// import checkProjectPermission from "../middleware/checkProjectPermission";

// TODO : notification
@Resolver()
export class CommentResolver {
  @Mutation(() => CommentResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async createComment(
    @Arg("taskId") taskId: string,
    @Arg("options") options: CommentCreateInput,
    @Ctx() { req }: MyContext
  ): Promise<CommentResponse> {
    try {
      const projectId =
        req.query.projectId || "5149897e-04b8-4f12-881c-2e612152e078";

      const userId = req.session.passport?.user;
      const user = await User.findOne({ id: userId });
      if (!user) return { error: generateError(errorKeys.AUTH_NOT_FOUND) };

      const assignedUsers = await UserTask.find({
        where: { task: taskId },
        relations: ["user"],
      });

      const em = getManager();
      const transactionResult = await em.transaction(
        async (transactionalEntityManager) => {
          const task = await Task.findOne({ id: taskId });
          if (!task) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

          // comment 생성
          const tempComment = await em.create(Comment, {
            task,
            user,
            ...options,
          });
          const comment = await transactionalEntityManager.save(tempComment);

          const project = await Project.findOne({ id: projectId });
          if (!project) return { error: generateError(errorKeys.BAD_REQUEST) };

          await Promise.all(
            assignedUsers.map(async (userTask) => {
              // eslint-disable-next-line no-async-promise-executor
              return new Promise(async (resolve) => {
                const notification = await em.create(CommentNotification, {
                  project,
                  author: user,
                  target: userTask.user,
                  comment,
                  task,
                });
                await transactionalEntityManager.save(notification);
                resolve(true);
              });
            })
          );

          return { comment: [comment] };
        }
      );
      return transactionResult;
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default CommentResolver;
