import { EntityRepository, getManager, Repository } from "typeorm";
import Board from "../entities/Board";
import Project from "../entities/Project";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  // TODO : 인자를 sprintId로 바꾸시오
  async changeBoardIndex(boardId: string, newIndex: number): Promise<boolean> {
    try {
      const board = await Board.findOne({
        where: { id: boardId },
        relations: ["project"],
      });

      if (board) {
        const { project } = board;
        const oldIndex = board.boardColumnIndex;

        if (oldIndex === newIndex) return false;
        if (newIndex < 0) return false;

        const asc = oldIndex < newIndex;
        const start = asc ? oldIndex + 1 : newIndex;
        const end = asc ? newIndex : oldIndex - 1;

        const allBoards = await Project.findOne({
          where: { id: project.id },
          relations: ["board"],
        });

        if (!allBoards?.board?.length) return false;
        if (newIndex >= allBoards.board.length) return false;

        const targetBoards = allBoards.board.filter((board) => {
          return (
            board.boardColumnIndex >= start && board.boardColumnIndex <= end
          );
        });

        await getManager().transaction(async (transactionalEntityManager) => {
          await Promise.all(
            targetBoards.map(async (currnetBoard) => {
              // eslint-disable-next-line no-async-promise-executor
              return new Promise(async (resolve) => {
                const curIndex = Number(currnetBoard.boardColumnIndex);
                await transactionalEntityManager.update(
                  Board,
                  { id: currnetBoard.id },
                  {
                    boardColumnIndex: asc ? curIndex - 1 : curIndex + 1,
                  }
                );

                resolve(true);
              });
            })
          );

          await transactionalEntityManager.update(
            Board,
            { id: boardId },
            { boardColumnIndex: newIndex }
          );
        });
        return true;
      }
      return false;
    } catch (err) {
      console.log("Board Index Update Error:", err);
      return false;
    }
  }
}

export default BoardRepository;

// NOTE
// 1. projectId가 일치하는 모든 board를 찾아낸다.
// boards.find((board) => board.id === boardId);

// 2. oldIndex랑 ProjectId를 알아낸다
// const res = await Board.update({ id }, { ...titleOrIndex });

// 4. 정렬한다.
// 이동할 인덱스가 원래 인덱스보다 뒤라면
// [0] [1] [old] [3] [4] [new] [5]
// 2 -> 4 Between(oldIndex + 1, newIndex)
// old 이전 인덱스는 무시
// old ~ new : 인덱스 - 1
// new = new
// new 이후 인덱스는 무시

// 이동할 인덱스가 원래 인덱스보다 앞이라면
// [0] [1] [new] [2] [3] [old] [5]
// 4 -> 2 Between(newIndex, oldIndex - 1)
// new 이전 무시
// new = new
// new ~ old : 인덱스 + 1
// old 이후 무시

// eslint-disable-next-line no-restricted-syntax
// for await (const currentBoard of someBoards) {
//   console.log("------ before", currentBoard);
//   const updatedBoard = await em.update(
//     Board,
//     { id: currentBoard.id },
//     {
//       boardColumnIndex: asc
//         ? currentBoard.boardColumnIndex - 1
//         : currentBoard.boardColumnIndex + 1,
//     }
//   );
// await transactionalEntityManager.save(updatedBoard);
// console.log("------ after", currentBoard);
// }
