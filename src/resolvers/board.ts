import { Resolver, Arg, Query, Mutation, UseMiddleware } from "type-graphql";
import { getCustomRepository, getManager, getRepository } from "typeorm";

/* Entities */
import Board from "../entities/Board";
import Project from "../entities/Project";
import Sprint from "../entities/Sprint";
import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
import generateError, { errorKeys } from "../utils/ErrorFactory";

/* Types */
import BoardResponse from "./types/BoardResponse";
import BoardUpdateInput from "./types/BoardUpdateInput";

// /* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkAdminPermission from "../middleware/checkAdminPermission";
import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class BoardResolver {
  @Query(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkProjectPermission])
  async getBoards(@Arg("projectId") projectId: string): Promise<BoardResponse> {
    try {
      const currentSprint = await Sprint.findOne({
        project: projectId,
        didStart: true,
      });

      if (!currentSprint)
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      const boards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.project", "project")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .where("board.project = :projectId")
        .setParameter("projectId", projectId)
        // .leftJoinAndSelect("task.sprint", "spirnt")
        // .where("task.sprint = :sprintId")
        // .setParameter("sprintId", currentSprint.id)
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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async createBoard(
    @Arg("title") title: string,
    @Arg("projectId") projectId: string
  ): Promise<BoardResponse> {
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
      const project = await Project.findOne({ id: projectId });

      const em = getManager();
      const transactionResult = await em.transaction(
        async (transactionalEntityManager) => {
          const updateRes = await transactionalEntityManager.update(
            Board,
            { project, boardColumnIndex: boards.length - 1 },
            { boardColumnIndex: boards.length }
          );
          console.log("updateRes", updateRes);

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

      // const newBoards = await Board.find({
      //   where: { project: projectId },
      //   relations: ["task"],
      // });

      const newBoards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.project", "project")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .where("board.project = :projectId")
        .setParameter("projectId", projectId)
        // .leftJoinAndSelect("task.sprint", "spirnt")
        // .where("task.sprint = :sprintId")
        // .setParameter("sprintId", currentSprint.id)
        .orderBy("board.boardColumnIndex", "ASC")
        .addOrderBy("task.boardRowIndex", "ASC")
        .getMany();
      console.log("newBoards", newBoards);

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
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async updateBoard(
    @Arg("options") { id, title, boardColumnIndex: newIndex }: BoardUpdateInput,
    @Arg("projectId") projectId: string
  ): Promise<BoardResponse> {
    try {
      const board = await Board.findOne({
        where: { id },
        relations: ["project"],
      });
      if (board?.project.id !== projectId)
        return {
          error: generateError(errorKeys.BAD_REQUEST, "board"),
        };

      const boardRepository = getCustomRepository(BoardRepository);

      if (newIndex !== undefined) {
        const res = await boardRepository.changeBoardIndex(id, newIndex);
        if (!res)
          return { error: generateError(errorKeys.BAD_REQUEST, "board") };
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
        return { error: generateError(errorKeys.BAD_REQUEST, "board") };

      // FIXME
      // const boards = await getRepository(Board)
      //   .createQueryBuilder("board")
      //   .leftJoinAndSelect("board.task", "task")
      //   .leftJoinAndSelect("task.taskLabel", "taskLabel")
      //   .leftJoinAndSelect("taskLabel.label", "label")
      //   .leftJoinAndSelect("task.userTask", "userTask")
      //   .leftJoinAndSelect("userTask.user", "user")
      //   .where("board.project = :projectId")
      //   .setParameter("projectId", projectId)
      //   // .leftJoinAndSelect("task.sprint", "spirnt")
      //   // .where("task.sprint = :sprintId")
      //   // .setParameter("sprintId", currentSprint.id)
      //   .orderBy("board.boardColumnIndex", "ASC")
      //   .addOrderBy("task.boardRowIndex", "ASC")
      //   .getMany();
      const updatedBoard = await Board.findOne({
        where: { id },
        relations: [
          "project",
          "task",
          "task.userTask",
          "task.userTask.user",
          "task.taskLabel",
          "task.taskLabel.label",
        ],
      });

      if (!updatedBoard)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      return { boards: [updatedBoard] };
    } catch (err) {
      console.log("Board update Mutation error:", err);
      if (err.code === "22P02")
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => BoardResponse)
  @UseMiddleware([checkAuthStatus, checkAdminPermission])
  async deleteBoard(
    @Arg("id") id: string,
    @Arg("newBoardId") newBoardId: string,
    @Arg("projectId") projectId: string
  ): Promise<BoardResponse> {
    try {
      const boardRepository = getCustomRepository(BoardRepository);

      const res = await boardRepository.deleteBoardAndChangeBoardsIndex(
        id,
        newBoardId
      );
      if (!res) return { error: generateError(errorKeys.BAD_REQUEST, "board") };

      const currentSprint = await Sprint.findOne({
        project: projectId,
        didStart: true,
      });

      if (!currentSprint)
        return { error: generateError(errorKeys.BAD_REQUEST, "board") };

      const boards = await getRepository(Board)
        .createQueryBuilder("board")
        .leftJoinAndSelect("board.project", "project")
        .leftJoinAndSelect("board.task", "task")
        .leftJoinAndSelect("task.taskLabel", "taskLabel")
        .leftJoinAndSelect("taskLabel.label", "label")
        .leftJoinAndSelect("task.userTask", "userTask")
        .leftJoinAndSelect("userTask.user", "user")
        .where("board.project = :projectId")
        .setParameter("projectId", projectId)
        // .leftJoinAndSelect("task.sprint", "spirnt")
        // .where("task.sprint = :sprintId")
        // .setParameter("sprintId", currentSprint.id)
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
