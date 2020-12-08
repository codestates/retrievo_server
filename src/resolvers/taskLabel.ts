import { Resolver, Ctx, Arg, Mutation, UseMiddleware } from "type-graphql";
import { getManager } from "typeorm";

/* Entities */
import Task from "../entities/Task";
import Label from "../entities/Label";
import TaskLabel from "../entities/TaskLabel";
import Project from "../entities/Project";

/* Utils */
// import { prod } from "../constants";
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import TaskLabelResponse from "./types/TaskLabelResponse";

// /* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkProjectPermission from "../middleware/checkProjectPermission";

// TODO : notification
@Resolver()
export class TaskLabelResolver {
  @Mutation(() => TaskLabelResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async createTaskLabel(
    @Arg("taskId") taskId: string,
    @Arg("name") name: string,
    @Arg("color") color: string,
    @Ctx() { req }: MyContext
  ): Promise<TaskLabelResponse> {
    const projectId =
      req.query.projectId || "6e523cc7-da7a-4014-b3ac-dfe9261c892c";
    const project = await Project.findOne({ id: projectId });
    const em = getManager();

    try {
      // 1. 프로젝트에 이미 존재하는 label이 있는지 확인
      let label = await Label.findOne({ where: { name, project: projectId } });
      console.log("label: ", label);
      const task = await Task.findOne({ id: taskId });
      console.log("task: ", task);

      const isCreated = await em.transaction(
        async (transactionalEntityManager) => {
          if (label) {
            const taskLabel = await TaskLabel.findOne({
              where: { label, task },
            });
            console.log("taskLabel: ", taskLabel);
            if (taskLabel) {
              return false;
            }
          } else {
            const tempLabel = await em.create(Label, { project, color, name });
            label = await transactionalEntityManager.save(tempLabel);
            console.log("label: ", label);
          }

          const tempTaskLabel = await em.create(TaskLabel, { task, label });
          console.log("tempTaskLabel: ", tempTaskLabel);
          return await transactionalEntityManager.save(tempTaskLabel);
        }
      );

      console.log("isCreated: ", isCreated);
      if (!isCreated) return { error: generateError(errorKeys.BAD_REQUEST) };
      const groupOfTaskLabels = await TaskLabel.find({
        where: { task: taskId },
        relations: ["label", "task"],
      });

      console.log("groupOfTaskLabels: ", groupOfTaskLabels);
      return { taskLabel: groupOfTaskLabels };
    } catch (err) {
      console.log("taskLabelCreateError catch:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Boolean)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async deleteTaskLabel(@Arg("id") id: string): Promise<boolean> {
    try {
      const deleteRes = await TaskLabel.delete({ id });
      if (!deleteRes.affected || deleteRes.affected < 1) return false;
      return true;
    } catch (err) {
      console.log("Task create Mutation error:", err);
      return false;
    }
  }
}

export default TaskLabelResolver;
