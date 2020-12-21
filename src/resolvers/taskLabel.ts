import { Resolver, Arg, Mutation, UseMiddleware } from "type-graphql";
import { getManager } from "typeorm";

/* Entities */
import Task from "../entities/Task";
import Label from "../entities/Label";
import TaskLabel from "../entities/TaskLabel";
import Project from "../entities/Project";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
// import { MyContext } from "../types";
import TaskLabelResponse from "./types/TaskLabelResponse";
import DeleteResponse from "./types/DeleteResponse";

/* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";
@Resolver()
export class TaskLabelResolver {
  @Mutation(() => TaskLabelResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async createTaskLabel(
    @Arg("taskId") taskId: string,
    @Arg("name") name: string,
    @Arg("color") color: string,
    @Arg("projectId") projectId: string
  ): Promise<TaskLabelResponse> {
    const project = await Project.findOne({ id: projectId });
    const em = getManager();

    try {
      let label = await Label.findOne({ where: { name, project: projectId } });
      const task = await Task.findOne({ id: taskId });

      const isCreated = await em.transaction(
        async (transactionalEntityManager) => {
          if (label) {
            const taskLabel = await TaskLabel.findOne({
              where: { label, task },
            });
            if (taskLabel) {
              return false;
            }
          } else {
            const tempLabel = await em.create(Label, { project, color, name });
            label = await transactionalEntityManager.save(tempLabel);
          }

          const tempTaskLabel = await em.create(TaskLabel, { task, label });
          return await transactionalEntityManager.save(tempTaskLabel);
        }
      );

      if (!isCreated) return { error: generateError(errorKeys.BAD_REQUEST) };
      const groupOfTaskLabels = await TaskLabel.find({
        where: { task: taskId },
        relations: ["label", "task"],
      });

      return { taskLabel: groupOfTaskLabels };
    } catch (err) {
      console.log("TaskLabel Create Mutation Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => DeleteResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async deleteTaskLabel(
    @Arg("labelId") labelId: string,
    @Arg("taskId") taskId: string,
    @Arg("projectId") projectId: string
  ): Promise<DeleteResponse> {
    try {
      const label = await Label.findOne({ id: labelId });
      const task = await Task.findOne({ id: taskId });
      const deleteRes = await TaskLabel.delete({ label, task });
      if (!deleteRes.affected)
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { success: true };
    } catch (err) {
      console.log("projectId", projectId);
      console.log("TaskLabel Delete Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default TaskLabelResolver;
