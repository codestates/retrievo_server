import {
  Resolver,
  Ctx,
  Arg,
  Query,
  UseMiddleware,
  Mutation,
} from "type-graphql";

/* Entities */
import Label from "../entities/Label";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";
import Project from "../entities/Project";

/* Types */
import { MyContext } from "../types";
import LabelResponse from "./types/LabelResponse";
import LabelDeleteResponse from "./types/LabelDeleteRespons";

import LabelUpdateInput from "./types/LabelUpdateInput";
// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkAdminPermission from "../middleware/checkAdminPermission";
// import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class LabelResolver {
  @Query(() => LabelResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async getlabels(@Ctx() { req }: MyContext): Promise<LabelResponse> {
    try {
      const projectId =
        req.params.projectId || "2654a702-a252-419f-a8b9-66fc3341b4d7";
      const labels = await Label.find({ where: { project: projectId } });
      if (!labels) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { label: labels };
    } catch (err) {
      console.log("LabelsOfProject Read Query Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => LabelResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async updateLabel(
    @Arg("id") id: string,
    @Arg("options") options: LabelUpdateInput,
    @Ctx() { req }: MyContext
  ): Promise<LabelResponse> {
    // FIXME : const { projectId } = req.query;
    const projectId =
      req.params.projectId || "2654a702-a252-419f-a8b9-66fc3341b4d7";
    try {
      const label = await Label.findOne({ where: { name: options.name } });
      if (label) return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

      const updateRes = await Label.update({ id }, { ...options });
      if (!updateRes.affected)
        return { error: generateError(errorKeys.BAD_REQUEST) };

      const project = await Project.findOne({ id: projectId });
      const labels = await Label.find({ project });
      if (!labels)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      return { label: labels };
    } catch (err) {
      console.log("Label update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => LabelDeleteResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async deleteLabel(@Arg("id") id: string): Promise<LabelDeleteResponse> {
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
      console.log("Label delete Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default LabelResolver;
