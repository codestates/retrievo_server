/* eslint-disable no-param-reassign */
import { getRepository } from "typeorm";
import Sprint from "../entities/Sprint";
import SprintResponse from "../resolvers/types/SprintResponse";
import generateError, { errorKeys } from "./ErrorFactory";

export async function sprintRowDnd(
  row: number,
  sprint: Sprint,
  projectId: string
): Promise<SprintResponse> {
  const sprintRepository = getRepository(Sprint);

  const prevRow = sprint.row;
  const targetRow = row;
  const targetSprint = await sprintRepository.findOne({
    where: { row: targetRow, project: projectId },
  });
  const updatedSprints = [];

  if (!targetSprint) {
    return { error: generateError(errorKeys.DATA_NOT_FOUND) };
  }

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
      .where(`sprint.project_id='${projectId}'`)
      .andWhere(`sprint.row BETWEEN '${start}' AND '${end}'`)
      .getMany();

    sprintsToBeUpdated.forEach((sprint) => {
      Object.assign(sprint, { row: sprint.row + num });
      updatedSprints.push(sprint);
    });
  }

  if (updatedSprints !== undefined) {
    updatedSprints.map(async (sprint) => {
      await sprintRepository.save(sprint);
    });
  }

  const sprints = await Sprint.find({ where: { project: projectId } });
  const result = [...sprints];
  result.sort((a, b) => a.row - b.row);

  return {
    success: true,
    sprints: result,
  };
}

export default sprintRowDnd;
