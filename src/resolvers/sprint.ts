import {
  Resolver,
  Ctx,
  Arg,
  Query,
  Mutation,
  // UseMiddleware,
} from "type-graphql";
// import { getCustomRepository } from "typeorm";
// import { getManager } from "typeorm";

/* Entities */
// import User from "../entities/User";
import { getRepository } from "typeorm";
import Sprint from "../entities/Sprint";
// import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
import { prod } from "../constants";

/* Types */
import { MyContext } from "../types";
import SprintResponse from "./types/SprintResponse";
import { SprintOptionInput } from "./types/SprintOptionInput";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkProjectPermission from "../middleware/checkProjectPermission";
// import checkAdminPermission from "../middleware/checkAdminPermission";
@Resolver()
export class SprintResolver {
  @Query(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async getSprint(@Arg("id") id: string): Promise<SprintResponse> {
    try {
      // const projectId = prod
      //   ? req.params
      //   : "332053e6-45cd-4104-92db-000154a1af32";

      const sprint = await Sprint.findOne(id, {
        relations: ["task", "task.sprint"],
      });
      if (!sprint) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      return { sprint };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Query(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus]) // FIXME : checkProjectPermission
  async getSprints(
    @Ctx() { req }: MyContext
  ): Promise<Sprint[] | SprintResponse> {
    try {
      const projectId = prod
        ? req.params
        : "379fde06-2c64-4550-94ec-19d783dc9726";

      const sprints = await Sprint.find({
        where: { project: projectId },
        relations: ["task", "task.sprint"],
      });

      // const sprints = await Sprint.createQueryBuilder()
      //   .leftJoinAndSelect("sprint.task", "task")
      //   .leftJoinAndSelect("task.taskLabel", "taskLabel")
      //   .leftJoinAndSelect("taskLabel.label", "label")
      //   .getMany();

      if (!sprints) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      return { sprints };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  async createSprint(
    @Arg("title") title: string,
    @Ctx() context: MyContext
  ): Promise<SprintResponse> {
    const { req } = context;

    const projectId = prod
      ? req.params.projectId
      : "332053e6-45cd-4104-92db-000154a1af32";

    if (!projectId) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }
    // 전체 스프린트의 개수를 불러오고 (count)
    // row = spinrts.length-1
    try {
      const sprints = await Sprint.find({
        where: { project: projectId },
        relations: ["project"],
      });

      const row = sprints.length ? sprints.length - 1 : 0;
      // const project = await Project.findOne(projectId);

      const sprint = await Sprint.create({
        title,
        row,
        project: projectId,
      }).save();

      // TODO Notification 생성 해줘야함.

      return { sprint };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  async updateSprint(
    @Arg("options") options: SprintOptionInput,
    @Ctx() context: MyContext
  ): Promise<SprintResponse> {
    const {
      id,
      title,
      didStart,
      isCompleted,
      row,
      dueDate,
      startedAt,
    } = options;

    try {
      const sprintRepository = getRepository(Sprint);
      const sprint = await sprintRepository.findOne(id);
      const { req } = context;
      const projectId = prod
        ? req.params.projectId
        : "332053e6-45cd-4104-92db-000154a1af32";

      if (!sprint) {
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      }

      if (title) sprint.title = title;
      if (didStart) sprint.didStart = didStart;
      // ask의 boardId가 board.findOne(where({boardColumnIndex : 0, projec}))
      // didStart === true -> 나를 제외한
      // task 의 입장
      // didStart를 누르면 task의 boardId가 board.findOne(where({boardColumnIndex : 0, projec})) 0번인 board를 할당 받음
      //
      // isCompleted를 누르면 board가 전부 NULL이 됨
      if (isCompleted) sprint.isCompleted = isCompleted;
      if (startedAt) sprint.startedAt = startedAt; // 프론트엔드에서 처리
      if (dueDate) sprint.dueDate = dueDate;

      // 아래는 row 만 수정
      if (row) {
        const prevRow = sprint.row;
        const targetRow = row;
        const targetSprint = await sprintRepository.findOne({
          where: { row: targetRow, project: projectId },
        });
        const updatedSprints = [];

        if (!targetSprint) {
          return { error: generateError(errorKeys.DATA_NOT_FOUND) };
        }

        // NOTE Swap인 경우
        if (Math.abs(prevRow - targetRow) === 1) {
          sprint.row = targetRow;
          targetSprint.row = prevRow;
          updatedSprints.push(sprint, targetSprint);
        } else {
          sprint.row = targetRow;
          updatedSprints.push(sprint);

          const num = prevRow > targetRow ? 1 : -1;
          const start = prevRow > targetRow ? targetRow : prevRow + 1; // 위에서 아래
          const end = prevRow > targetRow ? prevRow - 1 : targetRow; // 아래에서 위

          const sprintsToBeUpdated = await sprintRepository
            .createQueryBuilder("sprint")
            .where(`sprint.project = ${projectId}`)
            .andWhere(`sprint.row BETWEEN '${start}' AND '${end}'`)
            .getMany();

          console.log(
            "🚀 ~ file: sprint.ts ~ line 177 ~ SprintResolver ~ sprintsToBeChanged",
            sprintsToBeUpdated
          );

          sprintsToBeUpdated.forEach((sprint) => {
            Object.assign(sprint, { row: sprint.row + num });
            updatedSprints.push(sprint);
          });

          console.log(
            "🚀 ~ file: sprint.ts ~ line 177 ~ SprintResolver ~ sprintsToBeChanged",
            updatedSprints
          );
        }

        if (updatedSprints !== undefined) {
          updatedSprints.map(async (sprint) => {
            await sprintRepository.save(sprint);
          });
        }
      }
      // 위는 row 만 수정

      await sprintRepository.save(sprint);
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  async deleteSprint(
    // @Ctx() context: MyContext,
    @Arg("id") id: string
  ): Promise<SprintResponse> {
    const sprint = await Sprint.findOne(id);

    if (!sprint) {
      return { error: generateError(errorKeys.DATA_NOT_FOUND) };
    }

    try {
      await Sprint.delete(sprint);
      return { success: true };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  // @Mutation(() => SprintResponse)
  // @UseMiddleware([checkAuthStatus, checkIfGuest]) // FIXME : checkProjectPermission
  // async updateBoard(
  //   @Arg("options") { id, title, boardColumnIndex: newIndex }: BoardUpdateInput,
  //   @Ctx() { req }: MyContext
  // ): Promise<SprintResponse> {
  //   console.log(req.query.projectId);
  //   // FIXME : const { projectId } = req.query;
  //   const projectId = "469e011e-e4bc-4afb-93ca-47dcdf5ea3fb";
  //   try {
  //     const board = await Board.findOne({
  //       where: { id },
  //       relations: ["project"],
  //     });
  //     if (board?.project.id !== projectId)
  //       return {
  //         error: generateError(errorKeys.BAD_REQUEST, "project not match"),
  //       };

  //     // NOTE: customRepository를 불러온다
  //     const boardRepository = getCustomRepository(BoardRepository);

  //     // NOTE: 보드 id와 index를 changeBoardIndex 메소드의 인자로 넣는다.
  //     // NOTE: response로 true와 false를 받는다.
  //     if (newIndex !== undefined) {
  //       const res = await boardRepository.changeBoardIndex(id, newIndex);
  //       if (!res)
  //         return { error: generateError(errorKeys.BAD_REQUEST, "Index") };
  //     }

  //     if (title !== undefined) {
  //       const updateRes = await Board.update({ id }, { title });
  //       if (!updateRes.affected || updateRes.affected < 1)
  //         return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  //     }

  //     const project = await Project.findOne({
  //       where: { id: projectId },
  //       relations: ["board", "board.task"],
  //     });

  //     return { project };
  //   } catch (err) {
  //     console.log("Board update Mutation error:", err);
  //     if (err.code === "22P02")
  //       return { error: generateError(errorKeys.DATA_NOT_FOUND) };
  //     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  //   }
}

export default SprintResolver;
