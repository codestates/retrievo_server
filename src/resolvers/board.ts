import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
// import { getManager } from "typeorm";

/* Entities */
// import Project from "../entities/Project";
// import User from "../entities/User";
import checkIfGuest from "../middleware/checkIfGuest";
import Board from "../entities/Board";
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
      return { project: boards };
    } catch (err) {
      console.log("Board Read Query Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  async createBoard(
    @Arg("title") title: string,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log("req.query.projectId:", req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "469e011e-e4bc-4afb-93ca-47dcdf5ea3fb";

    try {
      const project = await Project.findOne({
        where: { id: projectId },
        relations: ["board"],
      });

      const duplicated = project?.board?.filter((board) => {
        return board.title === title;
      });

      if (duplicated?.length)
        return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

      const boardColumnIndex = project?.board?.length;

      await Board.create({
        title,
        project,
        boardColumnIndex,
      }).save();

      const newProject = await Project.findOne({
        where: { id: projectId },
        relations: ["board", "board.task"],
      });

      if (!newProject) {
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      }
      return { project: newProject };
    } catch (err) {
      console.log("Board create Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

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
