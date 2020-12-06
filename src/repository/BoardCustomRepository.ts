import { EntityRepository, getManager, Repository } from "typeorm";
import Board from "../entities/Board";
import Project from "../entities/Project";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  // TODO : 인자를 sprintId로 바꾸시오
  async changeBoardIndex(boardId: string, newIndex: number): Promise<boolean> {
    try {
      // TODO : entitiy를 Sprint로 바꾸시오
      const board = await Board.findOne({
        where: { id: boardId },
        relations: ["project"],
      });

      if (board) {
        // NOTE: board의 project와 oldIndex를 꺼낸다.
        const { project } = board;
        const oldIndex = board.boardColumnIndex;

        // NOTE: 이동하려는 인덱스가 같은 위치라면 false
        if (oldIndex === newIndex) return false;
        // NOTE: 이동하려는 위치가 음수라면 false
        if (newIndex < 0) return false;

        // NOTE: 정렬 방향과 추출할 인덱스를 확인한다
        const asc = oldIndex < newIndex;
        const start = asc ? oldIndex + 1 : newIndex;
        const end = asc ? newIndex : oldIndex - 1;

        // NOTE 같은 project 내의 모든 board를 찾는다
        const allBoards = await Project.findOne({
          where: { id: project.id },
          relations: ["board"],
        });

        // NOTE: board가 하나도 없다면 false
        if (!allBoards?.board?.length) return false;
        // NOTE: 총 board들의 갯수보다 더 크게 이동하려고 한다면 false
        if (newIndex >= allBoards.board.length) return false;

        const targetBoards = allBoards.board.filter((board) => {
          return (
            board.boardColumnIndex >= start && board.boardColumnIndex <= end
          );
        });

        // NOTE: transaction으로 현재 보드의 이동에 영향을 받는 보드들의 인덱스를 바꾼다
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

          // NOTE 원래 이동하려던 board의 Index도 변경한다
          await transactionalEntityManager.update(
            Board,
            { id: boardId },
            { boardColumnIndex: newIndex }
          );
        });
        // NOTE transaction 성공시 true를 반환
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

// 3. 변경될 board들만 걸러낸다.

// 4. 수정한다
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
