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
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import CommentDeleteResponse from "./types/CommentDeleteResponse";

// /* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import CommentResponse from "./types/CommentResponse";
import CommentCreateInput from "./types/CommentCreateInput";
import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class CommentResolver {
  @Mutation(() => CommentResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async createComment(
    @Arg("taskId") taskId: string,
    @Arg("options") options: CommentCreateInput,
    @Arg("projectId") projectId: string,
    @Ctx() { req }: MyContext
  ): Promise<CommentResponse> {
    try {
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

  @Mutation(() => CommentResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async updateComment(
    @Arg("id") id: string,
    @Arg("content") content: string,
    @Arg("projectId") projectId: string,
    @Ctx() { req }: MyContext
  ): Promise<CommentResponse> {
    try {
      const comment = await Comment.findOne({
        where: { id },
        relations: ["user"],
      });
      if (!comment) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      const userId = req.session.passport?.user;
      const user = await User.findOne({ id: userId });
      if (!user) return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
      if (comment.user?.id !== userId)
        return { error: generateError(errorKeys.AUTH_NO_PERMISSION) };

      const updateRes = await Comment.update({ id }, { content });
      if (!updateRes.affected)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      const updatedComment = await Comment.findOne({
        where: { id },
        relations: ["user", "task"],
      });
      if (!updatedComment)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      return { comment: [updatedComment] };
    } catch (err) {
      console.log("projectId", projectId);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.BAD_REQUEST) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => CommentDeleteResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async deleteComment(
    @Arg("id") id: string,
    @Arg("projectId") projectId: string,
    @Ctx() { req }: MyContext
  ): Promise<CommentDeleteResponse> {
    try {
      const comment = await Comment.findOne({
        where: { id },
        relations: ["user"],
      });

      if (!comment)
        return { error: generateError(errorKeys.DATA_NOT_FOUND, "commentId") };

      if (comment.user?.id !== req.session.passport?.user) {
        return { error: generateError(errorKeys.AUTH_NO_PERMISSION, "userId") };
      }

      const deleteRes = await Comment.delete({ id });
      if (!deleteRes.affected)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      return { success: true };
    } catch (err) {
      console.log("projectId", projectId);
      console.log("delete Comment error", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default CommentResolver;
