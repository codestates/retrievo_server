import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getCustomRepository } from "typeorm";
// import { getManager } from "typeorm";

/* Entities */
// import Project from "../entities/Project";
// import User from "../entities/User";
import Board from "../entities/Board";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import Project from "../entities/Project";
import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
// import { prod } from "../constants";
// import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import { MyContext } from "../types";
import BoardResponse from "./types/BoardResponse";
import BoardUpdateInput from "./types/BoardUpdateInput";

// /* Middleware */
import checkIfGuest from "../middleware/checkIfGuest";
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

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  async updateBoard(
    @Arg("options") { id, title, boardColumnIndex: newIndex }: BoardUpdateInput,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log(req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "469e011e-e4bc-4afb-93ca-47dcdf5ea3fb";
    try {
      const board = await Board.findOne({
        where: { id },
        relations: ["project"],
      });
      if (board?.project.id !== projectId)
        return {
          error: generateError(errorKeys.BAD_REQUEST, "project not match"),
        };

      const boardRepository = getCustomRepository(BoardRepository);

      if (newIndex !== undefined) {
        const res = await boardRepository.changeBoardIndex(id, newIndex);
        if (!res)
          return { error: generateError(errorKeys.BAD_REQUEST, "Index") };
      }

      if (title !== undefined) {
        const updateRes = await Board.update({ id }, { title });
        if (!updateRes.affected || updateRes.affected < 1)
          return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      }

      const project = await Project.findOne({
        where: { id: projectId },
        relations: ["board", "board.task"],
      });

      return { project };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default BoardResolver;
