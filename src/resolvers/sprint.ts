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
import Sprint from "../entities/Sprint";
// import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import { BoardRepository } from "../repository/BoardCustomRepository";

/* Utils */
import { prod } from "../constants";

/* Types */
import { MyContext } from "../types";
import SprintResponse from "./types/SprintResponse";

// /* Middleware */
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkAuthStatus from "../middleware/checkAuthStatus";
// import checkProjectPermission from "../middleware/checkProjectPermission";
// import checkAdminPermission from "../middleware/checkAdminPermission";

/*
SPRINT 정보 불러오기 RE-74 (first version)

 - 스프린트를 불러온다

- 스프린트 하위에 있는 테스크를 불러온다

스프린트들을 불러온다

각 스프린트들의 하위 테스크를 불러온다

스프린트 삭제 RE 76

해당 스프린트를 삭제한다

cascade 로 스프린트에 의존하고 있는 notification 을 지워야한다.

스프린트 추가 RE 75

스프린트를 생성해준다

이때 참조키로 프로젝트 id를 갖고 있어야한다.
  */

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

      return { sprint };
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
