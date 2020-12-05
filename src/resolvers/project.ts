import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  // UseMiddleware,
} from "type-graphql";
import { getManager } from "typeorm";
import { ProjectReturnType } from "./types/ProjectResponse";
import { prod } from "../constants";
import { MyContext } from "../types";
import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import checkAuthStatus from "../middleware/checkAuthStatus";
import { FieldError } from "./types/UserResponse";
import ProjectPermission from "../entities/ProjectPermission";
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkProjectPermission from "../middleware/checkProjectPermission";
// import { prod } from "../constants";

@Resolver()
export class ProjectResolver {
  @Query(() => Project)
  async project(
    @Ctx() context: MyContext
  ): Promise<Project | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne({ where: { id: projectId } });
      return project || { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Project)
  async createProject(
    @Arg("name") name: string
  ): Promise<Project | { error: FieldError }> {
    try {
      const project = await Project.create({
        name,
      }).save();

      return project;
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Project)
  async updateProjectName(
    @Ctx() context: MyContext,
    @Arg("name") name: string
  ): Promise<Project | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";

    const em = getManager();
    const project = await em.findOne(Project, projectId);

    try {
      if (name && project) {
        project.name = name;
        await em.save(project);
        return project;
      }

      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectPermission)
  async updateProjectPermission(
    @Ctx() context: MyContext,
    @Arg("userId") userId: string,
    @Arg("isAdmin") isAdmin: boolean
  ): Promise<ProjectPermission | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "5af3ad9f-69f4-4d73-894e-0e865c39712c";
    const em = getManager();

    try {
      if (userId && typeof isAdmin === "boolean") {
        const projectPermission = await em.findOne(ProjectPermission, {
          where: { user: userId, project: projectId },
        });

        if (projectPermission) {
          projectPermission.isAdmin = isAdmin;
          await em.save(projectPermission);
          return projectPermission;
        }
      }
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => ProjectReturnType)
  async deleteProject(
    @Ctx() context: MyContext
  ): Promise<ProjectReturnType | undefined> {
    const projectId = prod
      ? context.req.query.projectId
      : "c3645246-2095-4f34-b848-4d91735f5e7d";
    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await Project.delete(projectId);
      return { field: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default ProjectResolver;
