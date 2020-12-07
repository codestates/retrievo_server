import { EntityRepository, getManager, Repository } from "typeorm";
import Task from "../entities/Task";
import Sprint from "../entities/Sprint";
import Board from "../entities/Board";
// import Project from "../entities/Project";
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
        basicOptions,
        boardId,
        sprintId,
        newBoardRowIndex,
        newSprintRowIndex,
      } = taskUpdateInput;

      return await getManager().transaction(
        async (transactionalEntityManager) => {
          console.log(1, "transaction 시작");

          const task = await Task.findOne({
            where: { id },
            relations: ["board", "project", "sprint"],
          });
          if (!task) return false;
          console.log(2, "해당 테스크 찾기 완료");
          const board = await Board.findOne({
            where: { id: task.board?.id },
            relations: ["task"],
          });

          const groupOfBoards = await Board.find({
            where: { project: task.project.id },
            relations: ["task"],
          });

          // TODO
          // BoardId와 RowIndex가 있는 경우
          // 2. 보드를 이동하고 인덱스도 이동하는 경우
          // 2-a. 원래 있던 보드:
          // 원래 위치 인덱스 < task 들의 인덱스 -1해주기;
          // 2-b. 이동한 보드:
          // Id 연결, 이동한 보드의 taskIndex>= task들을 +1해줌
          if (boardId && newBoardRowIndex !== undefined) {
            if (!board || !board.task) return false;
            console.log(3, "task가 속한 보드 찾기 완료");
            const isComplete =
              groupOfBoards.length - 1 === board.boardColumnIndex;

            const oldBoardRowIndex = task.boardRowIndex;
            if (!oldBoardRowIndex) return false;
            // 2-a. 원래 있던 보드:
            const originalBoardTasks = await Task.find({
              where: { board: task.board, sprint: task.sprint },
            });
            if (!originalBoardTasks) return false;
            console.log(4, "originalBoardTasks 확인");

            const originalBoardTargetTasks = originalBoardTasks.filter(
              (task) => {
                if (task.boardRowIndex === null) return false;
                return task.boardRowIndex > oldBoardRowIndex;
              }
            );

            await Promise.all(
              originalBoardTargetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.boardRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      boardRowIndex: curIndex - 1,
                    }
                  );
                  resolve(true);
                });
              })
            );
            // 2-b. 이동한 보드:
            // 새보드와 Id연결, 이동한 보드의 taskIndex>= task들을 +1해줌
            console.log(5, "이동한 보드의 newBoardTasks 찾기");
            const newBoardTasks = await Task.find({
              where: { board: boardId, sprint: task.sprint },
            });
            if (!newBoardTasks) return false;
            console.log(5.1, "newBoardTasks 확인");

            const newBoardTargetTasks = newBoardTasks.filter((task) => {
              if (task.boardRowIndex === null) return false;
              return task.boardRowIndex >= newBoardRowIndex;
            });

            const newBoard = await Board.findOne({ id: boardId });
            if (!newBoard) return false;

            await Promise.all(
              newBoardTargetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.boardRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      boardRowIndex: curIndex + 1,
                    }
                  );
                  resolve(true);
                });
              })
            );

            // TODO Task update해주기
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                boardRowIndex: newBoardRowIndex,
                board: newBoard,
                completed: isComplete,
              }
            );
            console.log(5.3, "보드 이동과 index변경 종료");
            return true;
          }

          // NOTE
          // 이동한 보드가 가장 마지막 보드인가? -> completed 변경
          // TODO -> Test
          // 1. 보드 내에서 인데스만 변경되는 경우
          // BoardId는 없는데 BoardRowIndex가 있는 경우
          // 1-a. 그냥 하던대로 위치 바꿔주기
          if (!boardId && newBoardRowIndex !== undefined) {
            if (!board || !board.task) return false;
            console.log(3, "task가 속한 보드 찾기 완료");
            const isComplete =
              groupOfBoards.length - 1 === board.boardColumnIndex;

            console.log(6, "같은 보드 내 이동 시작");
            const oldBoardRowIndex = task.boardRowIndex;
            if (!oldBoardRowIndex || oldBoardRowIndex === newBoardRowIndex)
              return false;
            if (newBoardRowIndex < 0) return false;
            console.log(7, "타겟 인덱스가 유의미하지 않은 경우");

            const asc = oldBoardRowIndex < newBoardRowIndex;
            const start = asc ? oldBoardRowIndex + 1 : newBoardRowIndex;
            const end = asc ? newBoardRowIndex : oldBoardRowIndex - 1;

            // NOTE: Task의 Board이동에 영향을 받는 다른 Task들을 이동
            const groupOfTasks = await Task.find({
              board,
              sprint: task.sprint,
            });
            const targetTasks = groupOfTasks.filter((task) => {
              if (task.boardRowIndex === null) return false;
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

            // TODO Task update해주기
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                boardRowIndex: newBoardRowIndex,
                board,
                completed: isComplete,
              }
            );
            console.log("보드 내 인덱스 변경 종료");
            return true;
          }

          // TODO
          // 2. 스프린트를 이동하고 인덱스도 이동하는 경우
          // 2-a. 원래 있던 스프린트에서 task삭제 후 모든 뒷쪽 task 인덱스 -1해주기
          // if (didStart으로 이동한 경우){
          // 2-a. 0번 Board의 마지막 인덱스에 추가
          // }else if(didStart에서 이동한 경우){
          // boardId null, boardIndex null
          // }
          // 2-b. 이동한 스프린트의 Id 연결, taskIndex도 수정
          // 2-c. 이동한 스프린트의 taskIndex>= task들을 +1해줌
          if (sprintId && newSprintRowIndex !== undefined) {
            console.log("스프린트를 이동하고 인덱스도 이동하는 경우");

            const oldSprintRowIndex = task.sprintRowIndex;
            // 2-a. 원래 있던 보드:
            const originalSprintTasks = await Task.find({
              where: { sprint: task.sprint },
            });
            if (!originalSprintTasks) return false;
            console.log(4, "originalSprintTasks 확인");

            const originalSprintTargetTasks = originalSprintTasks.filter(
              (task) => {
                return task.sprintRowIndex > oldSprintRowIndex;
              }
            );

            await Promise.all(
              originalSprintTargetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.sprintRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      sprintRowIndex: curIndex - 1,
                    }
                  );
                  resolve(true);
                });
              })
            );
            // 2-b. 이동한 보드:
            // 새보드와 Id연결, 이동한 보드의 taskIndex>= task들을 +1해줌
            console.log(5, "이동한 스프린트의 newBoardTasks 찾기");
            const newSprintTasks = await Task.find({
              where: { sprint: sprintId },
            });
            if (!newSprintTasks) return false;
            console.log(5.1, "newSprintTasks 확인");

            const newSprintTargetTasks = newSprintTasks.filter((task) => {
              return task.sprintRowIndex >= newSprintRowIndex;
            });

            const newSprint = await Sprint.findOne({ id: sprintId });
            if (!newSprint) return false;

            await Promise.all(
              newSprintTargetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.sprintRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      sprintRowIndex: curIndex + 1,
                    }
                  );
                  resolve(true);
                });
              })
            );

            if (newSprint.didStart) {
              // didStart으로 이동한 경우
              // 2-a. 0번 Board의 마지막 인덱스에 추가
              const firstBoard = groupOfBoards.filter((board) => {
                return board.boardColumnIndex === 0;
              });
              if (!firstBoard[0] || !firstBoard[0].task) return false;

              await transactionalEntityManager.update(
                Task,
                { id },
                {
                  sprint: newSprint,
                  sprintRowIndex: newSprintRowIndex,
                  board: firstBoard[0],
                  boardRowIndex: firstBoard[0].task.length,
                }
              );
              return true;
            }

            // didStart가 아닌 곳으로 이동한 경우
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                board: null,
                boardRowIndex: null,
                sprintRowIndex: newSprintRowIndex,
                sprint: newSprint,
              }
            );

            console.log(5.3, "스프린트 이동과 index변경 종료");
            return true;
          }

          if (!sprintId && newSprintRowIndex !== undefined) {
            console.log("스프린트내에서 index 변경시");
            const oldSprintRowIndex = task.sprintRowIndex;
            if (oldSprintRowIndex === newSprintRowIndex) return false;
            if (newSprintRowIndex < 0) return false;
            console.log("SA-1", "타겟 인덱스가 유의미하지 않은 경우 확인");

            const asc = oldSprintRowIndex < newSprintRowIndex;
            const start = asc ? oldSprintRowIndex + 1 : newSprintRowIndex;
            const end = asc ? newSprintRowIndex : oldSprintRowIndex - 1;

            const groupOfTasks = await Task.find({
              sprint: task.sprint,
            });
            console.log("groupOfTasks", groupOfTasks);
            const targetTasks = groupOfTasks.filter((task) => {
              return task.sprintRowIndex >= start && task.sprintRowIndex <= end;
            });
            console.log("targetTasks", targetTasks);

            await Promise.all(
              targetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.sprintRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      sprintRowIndex: asc ? curIndex - 1 : curIndex + 1,
                    }
                  );
                  resolve(true);
                });
              })
            );

            // TODO Task update해주기
            await transactionalEntityManager.update(
              Task,
              { id },
              { sprintRowIndex: newSprintRowIndex }
            );
            console.log("같은 스프린트 내 index 변경 완료");
            return true;
          }

          if (sprintId) {
            if (sprintId === task.sprint.id) return false;
            // TODO Task update해주기
            const oldSprintRowIndex = task.sprintRowIndex;

            const originalSprintTasks = await Task.find({
              where: { sprint: task.sprint },
            });
            if (!originalSprintTasks) return false;
            console.log("~~~originalSprintTasks 확인");

            const originalSprintTargetTasks = originalSprintTasks.filter(
              (task) => {
                return task.sprintRowIndex > oldSprintRowIndex;
              }
            );

            await Promise.all(
              originalSprintTargetTasks.map(async (currnetTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currnetTask.sprintRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currnetTask.id },
                    {
                      sprintRowIndex: curIndex - 1,
                    }
                  );
                  resolve(true);
                });
              })
            );

            const newSprint = await Sprint.findOne({
              where: { id: sprintId },
              relations: ["task"],
            });
            if (!newSprint || newSprint.task === undefined) return false;

            // didstart로 이동한 경우
            if (newSprint.didStart) {
              // didStart으로 이동한 경우
              // 2-a. 0번 Board의 마지막 인덱스에 추가

              const groupOfBoards = await Board.find({
                where: { project: task.project.id },
                relations: ["task"],
              });

              const firstBoard = groupOfBoards.filter((board) => {
                return board.boardColumnIndex === 0;
              });
              if (!firstBoard[0] || !firstBoard[0].task) return false;

              await transactionalEntityManager.update(
                Task,
                { id },
                {
                  sprint: newSprint,
                  sprintRowIndex: newSprint.task.length,
                  board: firstBoard[0],
                  boardRowIndex: firstBoard[0].task.length,
                }
              );
              return true;
            }

            // didStart가 아닌 곳으로 이동한 경우
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                board: null,
                boardRowIndex: null,
                sprintRowIndex: newSprint.task.length,
                sprint: newSprint,
              }
            );

            console.log(5.3, "스프린트 이동과 index변경 종료");
            return true;
          }

          if (basicOptions) {
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                ...basicOptions,
              }
            );
            return true;
          }

          return false; // FIXME
        }
      );
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
