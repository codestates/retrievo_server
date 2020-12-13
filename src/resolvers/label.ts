import { Resolver, Arg, Query, UseMiddleware, Mutation } from "type-graphql";

/* Entities */
import Label from "../entities/Label";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";
import Project from "../entities/Project";

/* Types */
import LabelResponse from "./types/LabelResponse";
import LabelDeleteResponse from "./types/LabelDeleteRespons";
import LabelUpdateInput from "./types/LabelUpdateInput";

/* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class LabelResolver {
  @Query(() => LabelResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async getLabels(@Arg("projectId") projectId: string): Promise<LabelResponse> {
    try {
      const labels = await Label.find({ where: { project: projectId } });
      if (!labels) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { label: labels };
    } catch (err) {
      console.log("LabelsOfProject Read Query Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => LabelResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async updateLabel(
    @Arg("id") id: string,
    @Arg("options") options: LabelUpdateInput,
    @Arg("projectId") projectId: string
  ): Promise<LabelResponse> {
    try {
      const label = await Label.findOne({ where: { name: options.name } });
      if (label) return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

      const updateRes = await Label.update({ id }, { ...options });
      if (!updateRes.affected)
        return { error: generateError(errorKeys.BAD_REQUEST) };

      const project = await Project.findOne({ where: { id: projectId } });
      const labels = await Label.find({ project });
      if (!labels)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      return { label: labels };
    } catch (err) {
      console.log("projectId", projectId);
      console.log("Label update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => LabelDeleteResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async deleteLabel(
    @Arg("id") id: string,
    @Arg("projectId") projectId: string
  ): Promise<LabelDeleteResponse> {
    try {
      const deleteRes = await Label.delete({ id });
      if (!deleteRes.affected)
        return {
          error: generateError(
            errorKeys.INTERNAL_SERVER_ERROR,
            "delete failed"
          ),
        };

      return { success: true };
    } catch (err) {
      console.log("projectId", projectId);
      console.log("Label delete Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default LabelResolver;
