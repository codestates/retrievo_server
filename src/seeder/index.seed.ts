/* eslint-disable */

import { Factory, Seeder } from "typeorm-seeding";
// entities
import User from "../entities/User";
import Project from "../entities/Project";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin from "../entities/SocialLogins";
import Task from "../entities/Task";
import Sprint from "../entities/Sprint";
import Board from "../entities/Board";
import Label from "../entities/Label";
import TaskLabel from "../entities/TaskLabel";
import UserTask from "../entities/UserTask";
import Comment from "../entities/Comment";
import File from "../entities/File";
import SprintNotification from "../entities/SprintNotification";
import CommentNotification from "../entities/CommentNotification";
import TaskNotification from "../entities/TaskNotification";
export default class CreateSeeds implements Seeder {
  async run(factory: Factory): Promise<void> {
    const boardNum = 4;
    const sprintNum = 3;
    const labelNum = 10;
    const taskNum = 30;
    const userNum = 30;
    const projectNum = 10;

    // NOTE USER;
    const groupOfSocialLogins = await factory(SocialLogin)().makeMany(userNum);
    const groupOfUsers = await factory(User)().createMany(userNum);
    let socialLoginIndex = 0;
    for await (const socialLogin of groupOfSocialLogins) {
      const user = groupOfUsers[socialLoginIndex];
      Object.assign(socialLogin, { user });
      await factory(SocialLogin)().create(socialLogin);
      socialLoginIndex++;
    }

    // NOTE Project Relations Created
    const projects = await factory(Project)().createMany(projectNum);

    for await (const project of projects) {
      // NOTE : sprint
      // NOTE : sprintNotification
      const groupOfSprints = await factory(Sprint)().makeMany(sprintNum, {
        project,
      });
      const groupOfSprintNotifications = await factory(
        SprintNotification
      )().makeMany(sprintNum);
      let sprintCount = 0;
      for await (const sprint of groupOfSprints) {
        const sprintNotifcation = groupOfSprintNotifications[sprintCount];
        const target = groupOfUsers[sprintCount % userNum];
        Object.assign(sprint, { row: sprintCount });
        Object.assign(sprintNotifcation, {
          target,
          project,
          sprint,
        });
        await factory(Sprint)().create(sprint);
        await factory(SprintNotification)().create(sprintNotifcation);
        // Promise.all([
        //   factory(Sprint)().create(sprint),
        //   factory(SprintNotification)().create(sprintNotifcation),
        // ]);
        sprintCount += 1;
      }

      // NOTE: board
      const groupOfBoards = await factory(Board)().makeMany(boardNum, {
        project,
      });
      let boardColumnIndex = 0;
      for await (const board of groupOfBoards) {
        Object.assign(board, { boardColumnIndex });
        await factory(Board)().create(board);
        boardColumnIndex += 1;
      }

      // NOTE: label
      const groupOfLabels = await factory(Label)().createMany(labelNum, {
        project,
      });

      // NOTE: task
      const groupOfTasks = await factory(Task)().makeMany(taskNum);
      let taskIndex = 0;
      for await (const task of groupOfTasks) {
        let boardIndex = taskIndex % boardNum;
        console.log("boardIndex:", boardIndex);
        let sprintIndex = taskIndex % sprintNum;
        Object.assign(task, {
          sprint: groupOfSprints[sprintIndex],
          board: groupOfBoards[boardIndex],
          boardRowIndex: Math.floor(taskIndex / boardNum),
          sprintRowIndex: Math.floor(taskIndex / sprintNum),
        });
        taskIndex += 1;
        await factory(Task)().create(task);
      }

      // NOTE: tasklabel
      const groupOfTaskLabels = await factory(TaskLabel)().makeMany(taskNum);
      let taskLabelIndex = 0;
      for await (const taskLabel of groupOfTaskLabels) {
        const task = groupOfTasks[taskLabelIndex];
        const label = groupOfLabels[taskLabelIndex % labelNum];
        Object.assign(taskLabel, { task, label });
        await factory(TaskLabel)().create(taskLabel);
        taskLabelIndex += 1;
      }

      // NOTE: userTask
      // NOTE: taskNotification
      let userTaskIndex = 0;
      const groupOfUserTasks = await factory(UserTask)().makeMany(taskNum);
      const groupOfTaskNotifications = await factory(
        TaskNotification
      )().makeMany(taskNum);
      for await (const userTask of groupOfUserTasks) {
        const task = groupOfTasks[userTaskIndex % taskNum];
        const userIndex = userTaskIndex % userNum;
        const user = groupOfUsers[userIndex];
        const taskNotification =
          groupOfTaskNotifications[userTaskIndex % taskNum];
        Object.assign(userTask, { task, user });
        Object.assign(taskNotification, {
          target: user,
          project,
          status: task.board!,
          task,
        });

        await factory(UserTask)().create(userTask);
        await factory(TaskNotification)().create(taskNotification);

        // Promise.all([
        //   factory(UserTask)().create(userTask),
        //   factory(TaskNotification)().create(taskNotification),
        // ]);
        userTaskIndex += 1;
      }

      // NOTE : projectPermission
      const groupOfProjectPermissions = await factory(
        ProjectPermission
      )().makeMany(userNum);
      let projectPermissionIndex = 0;
      for await (const projectPermission of groupOfProjectPermissions) {
        const user = groupOfUsers[projectPermissionIndex % userNum];
        Object.assign(projectPermission, { project, user });
        await factory(ProjectPermission)().create(projectPermission);
        projectPermissionIndex += 1;
      }

      // NOTE: file
      let fileTaskIndex = 0;
      const groupOfFiles = await factory(File)().makeMany(taskNum);
      for await (const file of groupOfFiles) {
        const task = groupOfTasks[fileTaskIndex % taskNum];
        Object.assign(file, { task });
        await factory(File)().create(file);
        fileTaskIndex += 1;
      }

      // NOTE: Comment
      // NOTE: CommentNotification
      let commentIndex = 0;
      const groupOfComments = await factory(Comment)().makeMany(taskNum);
      const groupOfCommentNotifications = await factory(
        CommentNotification
      )().makeMany(taskNum);
      for await (const comment of groupOfComments) {
        const userIndex = commentIndex % userNum;
        const task = groupOfTasks[commentIndex];
        const user = groupOfUsers[userIndex];
        const author = groupOfUsers[userIndex >= taskNum ? 0 : userIndex + 1];
        const commentNotification =
          groupOfCommentNotifications[commentIndex % taskNum];
        Object.assign(comment, { task, user });
        Object.assign(commentNotification, {
          target: user,
          author,
          project,
          comment,
          task,
        });

        await factory(Comment)().create(comment);
        await factory(CommentNotification)().create(commentNotification);
        commentIndex += 1;
      }
    } // NOTE: Project RelationShip Generator End
  }
}
