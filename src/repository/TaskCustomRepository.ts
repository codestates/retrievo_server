import { EntityRepository, getManager, Repository } from "typeorm";
import Task from "../entities/Task";
import Sprint from "../entities/Sprint";
import Board from "../entities/Board";
// import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import TaskUpdateInput from "../resolvers/types/TaskUpdateInput";
// import { TaskResponse } from "../resolvers/types/TaskResponse";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async updateTaskAndChangeIndex(
    taskUpdateInput: TaskUpdateInput
  ): Promise<boolean> {
    try {
      // TODO: 나중에 시간나면 리팩토링
      const {
        id,
        options,
        boardId,
        sprintId,
        newBoardRowIndex,
        // newSprintRowIndex,
      } = taskUpdateInput;

      const isUpdated = await getManager().transaction(
        async (transactionalEntityManager) => {
          console.log(1);

          const task = await Task.findOne({
            where: { id },
            relations: ["board", "project", "sprint"],
          });
          if (!task) return { error: generateError(errorKeys.BAD_REQUEST) };
          console.log(2);
          const board = await Board.findOne({
            where: { id: task.board.id },
            relations: ["task"],
          });
          if (!board) return { error: generateError(errorKeys.BAD_REQUEST) };
          console.log(3);

          let updateRes;
          if (boardId || newBoardRowIndex !== undefined) {
            // NOTE
            // 이동한 보드가 가장 마지막 보드인가? -> completed 변경
            console.log(4);
            const groupOfBoards = await Board.find({
              where: { project: task.project.id },
            });
            const isComplete =
              groupOfBoards.length - 1 === board.boardColumnIndex;

            // TODO -> Test
            // BoardId는 없는데 BoardRowIndex가 있는 경우
            // 1. 보드 내에서 인데스만 변경되는 경우
            // 1-a. 그냥 하던대로 위치 바꿔주기
            if (newBoardRowIndex !== undefined) {
              const oldBoardRowIndex = task.boardRowIndex;
              if (oldBoardRowIndex === newBoardRowIndex) return false;
              if (newBoardRowIndex < 0) return false;
              console.log(5);

              const asc = oldBoardRowIndex < newBoardRowIndex;
              const start = asc ? oldBoardRowIndex + 1 : newBoardRowIndex;
              const end = asc ? newBoardRowIndex : oldBoardRowIndex - 1;

              // NOTE: Task의 Board이동에 영향을 받는 다른 Task들을 이동
              const groupOfTasks = await Task.find({
                board,
                sprint: task.sprint,
              });
              const targetTasks = groupOfTasks.filter((task) => {
                return task.boardRowIndex >= start && task.boardRowIndex <= end;
              });

              await Promise.all(
                targetTasks.map(async (currnetTask) => {
                  // eslint-disable-next-line no-async-promise-executor
                  return new Promise(async (resolve) => {
                    const curIndex = Number(currnetTask.boardRowIndex);
                    await transactionalEntityManager.update(
                      Task,
                      { id: currnetTask.id },
                      {
                        boardRowIndex: asc ? curIndex - 1 : curIndex + 1,
                      }
                    );
                    resolve(true);
                  });
                })
              );

              console.log(6);
            }

            // TODO
            // BoardId와 RowIndex가 있는 경우
            // 2. 보드를 이동하고 인덱스도 이동하는 경우
            // 2-a. 원래 있던 보드에서 task삭제 후 모든 뒷쪽 task 인덱스 -1해주기
            // 2-b. 이동한 보드의 Id 연결, taskIndex도 수정
            // 2-c. 이동한 보드의 taskIndex>= task들을 +1해줌
            if (!board || !board.task)
              return { error: generateError(errorKeys.BAD_REQUEST) };
            updateRes = await Task.update(
              { id },
              {
                board,
                boardRowIndex: newBoardRowIndex,
                completed: isComplete,
              }
            );

            // TODO Task update해주기
            await transactionalEntityManager.update(
              Task,
              { id },
              { boardRowIndex: newBoardRowIndex, board, completed: isComplete }
            );

            console.log("task update");
            return true;
          }

          // SprintId만 있는 경우

          // SprintId가 없는 경우
          if (sprintId) {
            // TODO
            // sprintId || boardId가 존재할 때 -> 해당하는 모든 테스크의 index 옮기기

            // 1. 스프린트 내에서 인데스만 변경되는 경우
            // 1-a. 그냥 하던대로 위치 바꿔주기

            // 2. 스프린트를 이동하고 인덱스도 이동하는 경우
            // 2-a. 원래 있던 스프린트에서 task삭제 후 모든 뒷쪽 task 인덱스 -1해주기
            // if (didStart으로 이동한 경우){
            // 2-a. 0번 Board의 마지막 인덱스에 추가
            // }else if(didStart에서 이동한 경우){
            // boardId null, boardIndex null
            // }
            // 2-b. 이동한 스프린트의 Id 연결, taskIndex도 수정
            // 2-c. 이동한 스프린트의 taskIndex>= task들을 +1해줌

            const sprint = await Sprint.findOne({
              where: { id: sprintId },
              relations: ["task"],
            });
            if (!sprint || !sprint.task)
              return { error: generateError(errorKeys.BAD_REQUEST) };
            updateRes = await Task.update(
              { id },
              { sprint, sprintRowIndex: sprint.task.length }
            );
          }

          if (options) {
            updateRes = await Task.update({ id }, { ...options });
          }

          if (!updateRes || !updateRes?.affected)
            return { error: generateError(errorKeys.BAD_REQUEST) };

          return false; // FIXME
        }
      );

      console.log(7);
      if (!isUpdated) return false;

      return true;
    } catch (err) {
      console.log("Task Update Error:", err);
      return false;
    }
  }
  // async updateTaskAndChangeBoardsIndex(
  //   boardId: string,
  //   newBoardId: string
  // ): Promise<boolean> {
  //   try {
  //   } catch (err) {
  //     console.log("Board Index Update Error:", err);
  //     return false;
  //   }
  // }
}

export default TaskRepository;
