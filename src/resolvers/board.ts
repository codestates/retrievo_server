import {
  Resolver,
  Ctx,
  // Arg,
  Query,
  // Mutation,
  UseMiddleware,
} from "type-graphql";
// import { getManager } from "typeorm";

/* Entities */
// import Project from "../entities/Project";
// import User from "../entities/User";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import Project from "../entities/Project";

/* Utils */
// import { prod } from "../constants";
// import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import BoardResponse from "./types/BoardResponse";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkProjectPermission from "../middleware/checkProjectPermission";
// import checkAdminPermission from "../middleware/checkAdminPermission";

@Resolver()
export class BoardResolver {
  @Query(() => BoardResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async boards(@Ctx() { req }: MyContext): Promise<BoardResponse> {
    try {
      console.log("req.query.projectId:", req.query.projectId);
      // FIXME : const { projectId } = req.query;
      const projectId = "1435cb06-5318-4a4a-9a32-cdae21a8b0e0";

      const boards = await Project.findOne({
        where: { id: projectId },
        relations: ["board", "board.task"],
      });

      if (!boards) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { boards };
    } catch (err) {
      console.log(err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  // @Query(() => Project)
  // @UseMiddleware(checkAuthStatus)
  // async boards(
  //   @Ctx() context: MyContext
  //   @Arg("name") name: string,

  // @Mutation(() => Project)
  // @UseMiddleware([checkAuthStatus, checkIfGuest])
  // async createProject(
  //   @Ctx() context: MyContext
  //   checkAdminPermission,
  // @Mutation(() => Project)
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkIfGuest,
  //   checkProjectPermission,
  // ])
  // async updateProjectName(
  //   @Ctx() context: MyContext,
  //   @Arg("name") name: string
  //     if (name && project) {
  //     ? context.req.query.projectId
  //     : "5af3ad9f-69f4-4d73-894e-0e865c39712c";
  //   const em = getManager();
  //   const project = await em.findOne(Project, projectId);
  //   try {
  //       project.name = name;
  //       await em.save(project);
  //       return project;
  //     }
  //     return { error: generateError(errorKeys.DATA_NOT_FOUND) };
  //   } catch (err) {
  //     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  //   }
  // }
  // @Mutation(() => ProjectPermission)
  // @UseMiddleware([
  //   checkAuthStatus,
  //   checkIfGuest,
  //   checkProjectPermission,
  //   checkAdminPermission,
  // ])
  // async updateProjectPermission(
  //   @Ctx() context: MyContext,
  //   @Arg("userId") userId: string,
  //   @Arg("isAdmin") isAdmin: boolean
  //       const projectPermission = await em.findOne(ProjectPermission, {
  //     ? context.req.query.projectId
  //     : "5af3ad9f-69f4-4d73-894e-0e865c39712c";
  //   const em = getManager();
  //   try {
  //     if (userId && typeof isAdmin === "boolean") {
  //         where: { user: userId, project: projectId },
  //       });
  //       if (projectPermission) {
  //         projectPermission.isAdmin = isAdmin;
  //         await em.save(projectPermission);
  //         return projectPermission;
  //       }
  //     }
  //     return { error: generateError(errorKeys.DATA_NOT_FOUND) };
  //   } catch (err) {
  //     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  //   }
  // }
}

export default BoardResolver;
