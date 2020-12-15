import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { getCustomRepository, getManager, getRepository } from "typeorm";

/* Entities */
import Board from "../entities/Board";
import Project from "../entities/Project";
import Sprint from "../entities/Sprint";
import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";

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
  // @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async getBoards(@Ctx() { req }: MyContext): Promise<BoardResponse> {
    try {
      console.log("req.query.projectId:", req.query.projectId);
      // FIXME : const { projectId } = req.query;
      const projectId = "04f025f8-234c-49b7-b9bf-7b7f94415569";

      const currentSprint = await Sprint.findOne({
        project: projectId,
        didStart: true,
      });

      if (!currentSprint)
        return { error: generateError(errorKeys.BAD_REQUEST) };

      const boards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .leftJoinAndSelect("task.sprint", "spirnt")
        .where("task.sprint = :sprintId")
        .setParameter("sprintId", currentSprint.id)
        .orderBy("board.boardColumnIndex", "ASC")
        .addOrderBy("task.boardRowIndex", "ASC")
        .getMany();

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
    const projectId = "04f025f8-234c-49b7-b9bf-7b7f94415569";

    try {
      const boards = await Board.find({
        where: { project: projectId },
      });

      const duplicated = boards?.filter((board) => {
        return board.title === title;
      });

      if (duplicated?.length)
        return { error: generateError(errorKeys.DATA_ALREADY_EXIST) };

      const boardColumnIndex = boards?.length - 1;
      // 마지막 보드의 인덱스 + 1
      const project = await Project.findOne({ id: projectId });

      const em = getManager();
      const transactionResult = await em.transaction(
        async (transactionalEntityManager) => {
          const updateRes = await transactionalEntityManager.update(
            Board,
            { project, boardColumnIndex: boards.length - 1 },
            { boardColumnIndex: boards.length }
          );

          if (!updateRes.affected)
            return { error: generateError(errorKeys.DATA_NOT_FOUND) };

          const tempNewBoard = await em.create(Board, {
            title,
            project,
            boardColumnIndex,
          });

          const newBoard = await transactionalEntityManager.save(tempNewBoard);
          if (!newBoard)
            return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

          return { success: true };
        }
      );

      if (transactionResult.error) return transactionResult;

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

      const currentSprint = await Sprint.findOne({
        project: projectId,
        didStart: true,
      });
      if (!currentSprint)
        return { error: generateError(errorKeys.BAD_REQUEST, "Sprint") };

      const boards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .leftJoinAndSelect("task.sprint", "spirnt")
        .where("task.sprint = :sprintId")
        .setParameter("sprintId", currentSprint.id)
        .orderBy("board.boardColumnIndex", "ASC")
        .addOrderBy("task.boardRowIndex", "ASC")
        .getMany();

      return { boards };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus]) // FIXME : , checkIfGuest, checkAdminPermission checkProjectPermission
  async deleteBoard(
    @Arg("id") id: string,
    @Arg("newBoardId") newBoardId: string,
    @Ctx() { req }: MyContext
  ): Promise<BoardResponse> {
    console.log(req.query.projectId);
    // FIXME : const { projectId } = req.query;
    const projectId = "50c97f43-4b30-4a8b-8d57-2cd68e739425";

    try {
      const boardRepository = getCustomRepository(BoardRepository);

      const res = await boardRepository.deleteBoardAndChangeBoardsIndex(
        id,
        newBoardId
      );
      if (!res) return { error: generateError(errorKeys.BAD_REQUEST, "Index") };

      const currentSprint = await Sprint.findOne({
        project: projectId,
        didStart: true,
      });

      if (!currentSprint)
        return { error: generateError(errorKeys.BAD_REQUEST, "Sprint") };

      const boards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .leftJoinAndSelect("task.sprint", "spirnt")
        .where("task.sprint = :sprintId")
        .setParameter("sprintId", currentSprint.id)
        .orderBy("board.boardColumnIndex", "ASC")
        .addOrderBy("task.boardRowIndex", "ASC")
        .getMany();

      return { boards };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default BoardResolver;
