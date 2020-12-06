import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getCustomRepository } from "typeorm";

/* Entities */
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
import checkAdminPermission from "../middleware/checkAdminPermission";
// import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class BoardResolver {
  @Query(() => BoardResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async boards(@Ctx() { req }: MyContext): Promise<BoardResponse> {
    try {
      console.log("req.query.projectId:", req.query.projectId);
      // FIXME : const { projectId } = req.query;
      const projectId = "a5bb5bdf-20e1-4aee-a2cc-f001a0745af4";
      const boards = await Board.find({ where: { project: projectId } });

      if (!boards) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { boards };
    } catch (err) {
      console.log("Board Read Query Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest, checkAdminPermission]) // FIXME : checkProjectPermission
  async createBoard(
    @Arg("title") title: string,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log("req.query.projectId:", req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "469e011e-e4bc-4afb-93ca-47dcdf5ea3fb";

    try {
      const boards = await Board.find({
        where: { project: projectId },
      });

      const duplicated = boards?.filter((board) => {
        return board.title === title;
      });

      if (duplicated?.length)
        return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

      const boardColumnIndex = boards?.length;

      const project = await Project.findOne({ id: projectId });

      await Board.create({
        title,
        project,
        boardColumnIndex,
      }).save();

      const newBoards = await Board.find({
        where: { project: projectId },
        relations: ["task"],
      });

      if (!newBoards) {
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      }
      return { boards: newBoards };
    } catch (err) {
      console.log("Board create Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest, checkAdminPermission]) // FIXME : checkProjectPermission
  async updateBoard(
    @Arg("options") { id, title, boardColumnIndex: newIndex }: BoardUpdateInput,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log(req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "f1b19174-5d91-4a97-83b0-893e74c9f7cd";
    try {
      const board = await Board.findOne({
        where: { id },
        relations: ["project"],
      });
      if (board?.project.id !== projectId)
        return {
          error: generateError(errorKeys.BAD_REQUEST, "project not match"),
        };

      // NOTE: customRepository를 불러온다
      const boardRepository = getCustomRepository(BoardRepository);

      // NOTE: 보드 id와 index를 changeBoardIndex 메소드의 인자로 넣는다.
      // NOTE: response로 true와 false를 받는다.
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

      const boards = await Board.find({
        where: { project: projectId },
        relations: ["task"],
      });

      return { boards };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest, checkAdminPermission]) // FIXME : checkProjectPermission
  async deleteBoard(
    @Arg("id") id: string,
    @Arg("newBoardId") newBoardId: string,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log(req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "002692aa-f191-43d7-9b95-300226629e77";

    try {
      const boardRepository = getCustomRepository(BoardRepository);

      const res = await boardRepository.deleteBoardAndChangeBoardsIndex(
        id,
        newBoardId
      );
      if (!res) return { error: generateError(errorKeys.BAD_REQUEST, "Index") };

      const boards = await Board.find({
        where: { project: projectId },
        relations: ["task"],
      });

      return { boards };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default BoardResolver;
