import { EntityRepository, getManager, Repository } from "typeorm";
import Task from "../entities/Task";
import Sprint from "../entities/Sprint";
import Board from "../entities/Board";
import User from "../entities/User";
import TaskUpdateInput from "../resolvers/types/TaskUpdateInput";
import TaskNotification, {
  taskNotificationType,
} from "../entities/TaskNotification";
import TaskDeleteResponse from "../resolvers/types/TaskDeleteRespons";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import TaskUpdateResponse from "../resolvers/types/TaskUpdateResponse";
@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async updateTaskAndChangeIndex(
    taskUpdateInput: TaskUpdateInput
  ): Promise<TaskUpdateResponse> {
    try {
      const {
        id,
        basicOptions,
        boardId,
        sprintId,
        newBoardRowIndex,
        newSprintRowIndex,
      } = taskUpdateInput;

      const task = await Task.findOne({
        where: { id },
        relations: ["board", "project", "sprint", "userTask", "userTask.user"],
      });
      if (!task) {
        console.log("updateTask: task 없음");
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      }

      /* find board of current task */
      const board = await Board.findOne({
        where: { id: task.board?.id },
        relations: ["task"],
      });

      const groupOfBoards = await Board.find({
        where: { project: task.project.id },
        relations: ["task"],
      });

      /* trasaction start */
      const em = getManager();
      const transactionRes = await em.transaction(
        async (transactionalEntityManager) => {
          if (boardId && task.userTask && task.userTask.length > 0) {
            const newBoard = await Board.findOne({ id: boardId });
            await Promise.all(
              task.userTask.map(async (userTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return await new Promise(async (resolve) => {
                  const target = await User.findOne({ id: userTask.user.id });
                  const taskNotification = await em.create(TaskNotification, {
                    target,
                    status: newBoard,
                    type: taskNotificationType.STATUS_CHANGED,
                    project: task.project,
                    task,
                  });
                  await transactionalEntityManager.save(taskNotification);
                  resolve(true);
                });
              })
            );
          }

          // //////////////////////////////
          // /////// BOARD 변경 시/////////
          // //////////////////////////////

          /* case 1. boardId && RowIndex : 보드간 task 이동 DND */
          if (boardId && newBoardRowIndex !== undefined) {
            if (!board || !board.task) {
              console.log("updateTask: board 없음");
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };
            }
            const isComplete =
              groupOfBoards.length - 1 === board.boardColumnIndex;

            const oldBoardRowIndex = task.boardRowIndex;
            if (!oldBoardRowIndex)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            /* case 1-1. find original board -> current idex - 1 */
            const originalBoardTasks = await Task.find({
              where: { board: task.board, sprint: task.sprint },
            });
            if (!originalBoardTasks)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };
            console.log(4, "originalBoardTasks 확인");

            const originalBoardTargetTasks = originalBoardTasks.filter(
              (task) => {
                if (task.boardRowIndex === null)
                  return { error: generateError(errorKeys.DATA_NOT_FOUND) };
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

            /* case 1-2. find new board -> current idex + 1 */
            const newBoardTasks = await Task.find({
              where: { board: boardId, sprint: task.sprint },
            });
            if (!newBoardTasks)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            const newBoardTargetTasks = newBoardTasks.filter((task) => {
              if (task.boardRowIndex === null) return false;
              return task.boardRowIndex >= newBoardRowIndex;
            });

            const newBoard = await Board.findOne({ id: boardId });
            if (!newBoard)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

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

            /* case 1-3. update current task */
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                boardRowIndex: newBoardRowIndex,
                board: newBoard,
                completed: isComplete,
              }
            );
            return { success: true };
          }

          /* case 2. !boardId && RowIndex : 보드 내 task 이동 DND */
          if (!boardId && newBoardRowIndex !== undefined) {
            if (!board || !board.task)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };
            const isComplete =
              groupOfBoards.length - 1 === board.boardColumnIndex;

            const oldBoardRowIndex = task.boardRowIndex;
            if (!oldBoardRowIndex || oldBoardRowIndex === newBoardRowIndex)
              return { error: generateError(errorKeys.BAD_REQUEST) };
            if (newBoardRowIndex < 0)
              return { error: generateError(errorKeys.BAD_REQUEST) };

            const asc = oldBoardRowIndex < newBoardRowIndex;
            const start = asc ? oldBoardRowIndex + 1 : newBoardRowIndex;
            const end = asc ? newBoardRowIndex : oldBoardRowIndex - 1;

            const groupOfTasks = await Task.find({
              board,
              sprint: task.sprint,
            });
            const targetTasks = groupOfTasks.filter((task) => {
              if (task.boardRowIndex === null) return false;
              return task.boardRowIndex >= start && task.boardRowIndex <= end;
            });

            /* case 2-1. task에 이동에 영향을 받는 task들 Index 수정 */
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

            /* case 2-2. 이동하는 task 자신의 Index 수정 */
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                boardRowIndex: newBoardRowIndex,
                board,
                completed: isComplete,
              }
            );
            return { success: true };
          }

          /* case 3. boardId : 다른 보드에 index 지정 없이 이동 시 */
          if (boardId) {
            const oldBoardRowIndex = task.boardRowIndex;
            if (oldBoardRowIndex === undefined || oldBoardRowIndex === null) {
              console.log("board update error: oldBoardRowIndex 없음");
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };
            }

            const originalBoardTasks = await Task.find({
              where: { board: task.board, sprint: task.sprint },
            });
            if (!originalBoardTasks) {
              console.log("board update error: 이전 보드 태스크 없음");
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };
            }

            const originalBoardTargetTasks = originalBoardTasks.filter(
              (task) => {
                if (task.boardRowIndex === null) return false;
                return task.boardRowIndex > oldBoardRowIndex;
              }
            );

            /* case 3-1. 본래 보드에서 task가 빠져나간 빈자리부터 인덱스를 -1씩 수정 */
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

            const newBoard = await Board.findOne({
              where: { id: boardId },
              relations: ["task"],
            });

            if (!newBoard || !newBoard.task)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            const completed =
              groupOfBoards.length - 1 === newBoard.boardColumnIndex;

            /* case 3-1. task를 targetBoard의 가장 마지막 인덱스로 추가 */
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                board: newBoard,
                boardRowIndex: newBoard.task.length,
                completed,
              }
            );

            return { success: true };
          }

          // ///////////////////////////////
          // /////// Sprint 변경 시/////////
          // ///////////////////////////////

          /* case 1. 다른 스프린트의 지정된 Index로 이동 DND */
          if (sprintId && newSprintRowIndex !== undefined) {
            const oldSprintRowIndex = task.sprintRowIndex;
            const originalSprintTasks = await Task.find({
              where: { sprint: task.sprint },
            });
            if (!originalSprintTasks)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            const originalSprintTargetTasks = originalSprintTasks.filter(
              (task) => {
                return task.sprintRowIndex > oldSprintRowIndex;
              }
            );

            /* case 1-1. 본래 스프린트의 빈 인덱스부터 task의 sprintIndex -1씩 수정 */
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

            const newSprintTasks = await Task.find({
              where: { sprint: sprintId },
            });
            if (!newSprintTasks)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            const newSprintTargetTasks = newSprintTasks.filter((task) => {
              return task.sprintRowIndex >= newSprintRowIndex;
            });

            const newSprint = await Sprint.findOne({ id: sprintId });
            if (!newSprint)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            /* case 1-2. 이동한 보드의 newSprintRowIndex부터 task들의 sprintRowIndex +1 증가 */
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

            /* case 1-3. 활성화된 Sprint로 이동 시 task의 board와 boardRowIndex를 함께 수정 */
            if (newSprint.didStart) {
              const firstBoard = groupOfBoards.filter((board) => {
                return board.boardColumnIndex === 0;
              });
              if (!firstBoard[0] || !firstBoard[0].task)
                return { error: generateError(errorKeys.DATA_NOT_FOUND) };

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
              return { success: true };
            }

            /* case 1-4. 활성화되지 않은 Sprint로 이동 시 task의 board와 boardRowIndex를 Null로 설정 */
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

            return { success: true };
          }

          /* case 2. 스프린트 내 Index 이동 DND */
          if (!sprintId && newSprintRowIndex !== undefined) {
            const oldSprintRowIndex = task.sprintRowIndex;
            if (oldSprintRowIndex === newSprintRowIndex)
              return { error: generateError(errorKeys.BAD_REQUEST) };
            if (newSprintRowIndex < 0)
              return { error: generateError(errorKeys.BAD_REQUEST) };

            const asc = oldSprintRowIndex < newSprintRowIndex;
            const start = asc ? oldSprintRowIndex + 1 : newSprintRowIndex;
            const end = asc ? newSprintRowIndex : oldSprintRowIndex - 1;

            const groupOfTasks = await Task.find({
              sprint: task.sprint,
            });
            const targetTasks = groupOfTasks.filter((task) => {
              return task.sprintRowIndex >= start && task.sprintRowIndex <= end;
            });

            /* case 2-1. 이동에 영향을 받는 task들의 index 수정 */
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

            /* case 2-2. task의 sprintRowIndex 수정 */
            await transactionalEntityManager.update(
              Task,
              { id },
              { sprintRowIndex: newSprintRowIndex }
            );
            return { success: true };
          }

          /* case 3. 인덱스 지정 없이 스프린트 이동 */
          if (sprintId) {
            if (sprintId === task.sprint.id)
              return { error: generateError(errorKeys.BAD_REQUEST) };
            const oldSprintRowIndex = task.sprintRowIndex;

            const originalSprintTasks = await Task.find({
              where: { sprint: task.sprint },
            });
            if (!originalSprintTasks)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            const originalSprintTargetTasks = originalSprintTasks.filter(
              (task) => {
                return task.sprintRowIndex > oldSprintRowIndex;
              }
            );

            /* case 3-1. 본래 sprint에서 빠져나간 index 뒤의 task sprintRowIndex -1씩 수정 */
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
            if (!newSprint || newSprint.task === undefined)
              return { error: generateError(errorKeys.DATA_NOT_FOUND) };

            /* case 3-2. 활성화 된 스프린트로 이동 시 Board 속성 추가 */
            if (newSprint.didStart) {
              const groupOfBoards = await Board.find({
                where: { project: task.project.id },
                relations: ["task"],
              });

              const firstBoard = groupOfBoards.filter((board) => {
                return board.boardColumnIndex === 0;
              });
              if (!firstBoard[0] || !firstBoard[0].task)
                return { error: generateError(errorKeys.DATA_NOT_FOUND) };

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
              return { success: true };
            }

            /* case 3-3. 활성화 되지 않은 Board로 이동시 Board속성 null로 수정 */
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

            return { success: true };
          }

          if (basicOptions) {
            await transactionalEntityManager.update(
              Task,
              { id },
              {
                ...basicOptions,
              }
            );
            return { success: true };
          }

          return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
        }
      );
      return transactionRes;
    } catch (err) {
      console.log("Task Update Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  async deleteTaskAndChangeIndice(taskId: string): Promise<TaskDeleteResponse> {
    try {
      const task = await Task.findOne({
        where: { id: taskId },
        relations: ["sprint", "board"],
      });
      if (!task) {
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      }

      const originalBoardTasks = await Task.find({ board: task.board });
      if (!originalBoardTasks)
        return { error: generateError(errorKeys.DATA_NOT_FOUND) };

      const sprintBoardTasks = originalBoardTasks.filter((currentTask) => {
        if (currentTask.boardRowIndex !== null && task.boardRowIndex !== null)
          return currentTask.boardRowIndex > task.boardRowIndex;
        return false;
      });

      return await getManager().transaction(
        async (transactionalEntityManager) => {
          /* 1. 활성화 된 sprint의 task라면 속해있던 board의 비게된 RowIndex들을 -1씩 수정 */
          if (task.sprint.didStart) {
            await Promise.all(
              sprintBoardTasks.map(async (currentTask) => {
                // eslint-disable-next-line no-async-promise-executor
                return new Promise(async (resolve) => {
                  const curIndex = Number(currentTask.boardRowIndex);
                  await transactionalEntityManager.update(
                    Task,
                    { id: currentTask.id },
                    {
                      boardRowIndex: curIndex - 1,
                    }
                  );
                  resolve(true);
                });
              })
            );
          }

          const originalSprintTasks = await Task.find({ sprint: task.sprint });
          if (!originalSprintTasks)
            return { error: generateError(errorKeys.DATA_NOT_FOUND) };

          const sprintTargetTasks = originalSprintTasks.filter(
            (currentTask) => {
              return currentTask.sprintRowIndex > task.sprintRowIndex;
            }
          );

          /* 2. 스프린트에서 task가 삭제되어 비게 된 자리만큼 SprintRowIndex들을 -1씩 수정 */
          await Promise.all(
            sprintTargetTasks.map(async (targetTask) => {
              // eslint-disable-next-line no-async-promise-executor
              return new Promise(async (resolve) => {
                const curIndex = Number(targetTask.sprintRowIndex);
                await transactionalEntityManager.update(
                  Task,
                  { id: targetTask.id },
                  { sprintRowIndex: curIndex - 1 }
                );
                resolve(true);
              });
            })
          );

          await transactionalEntityManager.delete(Task, { id: task.id });
          return { success: true };
        }
      );
    } catch (err) {
      console.log("Task delete repository Error:", err);
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default TaskRepository;
