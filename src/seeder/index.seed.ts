/* eslint-disable */

import { Factory, Seeder } from "typeorm-seeding";
// entities
import User from "../entities/User";
import Project from "../entities/Project";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin from "../entities/SocialLogins";
// import Action from "../entities/Action";
import Task from "../entities/Task";
import Sprint from "../entities/Sprint";
// import Comment from "../entities/Comment";
import Board from "../entities/Board";
import Label from "../entities/Label";
// import File from "../entities/File";

export default class CreateSeeds implements Seeder {
  async run(factory: Factory): Promise<void> {
    const MAXNUM = 30; //반드시 30단위어야한다

    const users = await factory(User)()
      .map(async (user: User) => {
        const socialLogin = await factory(SocialLogin)().create();
        // NOTE socialLogin created;
        return Object.assign(user, { socialLogin });
      })
      .createMany(MAXNUM); // NOTE user created;

    const projects = await factory(Project)().createMany(MAXNUM / 3);
    // NOTE project created;

    const projectPermissions = await factory(ProjectPermission)().makeMany(
      MAXNUM
    );

    let index = 0;

    for await (const projectPermission of projectPermissions) {
      const user = users[index];
      const project = projects[index % 10];
      Object.assign(projectPermission, { user, project });
      await factory(ProjectPermission)().create(projectPermission);
      index += 1;
    } // NOTE projectPermission created

    // 생각 정리
    // task는 sprint랑 board를 갖고 있음
    // 근데 sprint랑 board는 똑같은 project를 갖고 있어야 함

    index = 0;
    const sprintIds = []; // 30
    const sprints = await factory(Sprint)().makeMany(MAXNUM);
    const labels = await factory(Label)().makeMany(MAXNUM);
    // const task = await factory(Task)().makeMany(MAXNUM * 10);
    for await (const sprint of sprints) {
      sprintIds.push(sprint.id);
      const label = labels[index];
      const project = projects[index % 10]; //1 ~ 10
      const boardRow = Math.floor(index / 10);
      Object.assign(sprint, { project, boardRow });
      Object.assign(label, { project });
      await factory(Sprint)().create(sprint);
      await factory(Label)().create(label);
      index += 1;
    } // NOTE Sprint created

    index = 0;
    const boardIds = []; // 90
    const boards = await factory(Board)().makeMany(MAXNUM * 3);
    for await (const board of boards) {
      boardIds.push(board.id);
      const project = projects[index % 10];
      const boardColumnIndex = Math.floor(index / 10);
      Object.assign(board, { project, boardColumnIndex });
      await factory(Board)().create(board);
      index += 1;
    } // NOTE Board created

    index = 0;
    const taskIds = [];
    const tasks = await factory(Task)().makeMany(MAXNUM * 9);
    for await (const task of tasks) {
      taskIds.push(task.id);
      const sprint = sprintIds[Math.floor(index % 30)];
      const board = boardIds[Math.floor(index % 90)];
      const boardRowIndex = Math.floor(index / 90);
      const sprintRowIndex = Math.floor(index / 30);
      Object.assign(task, { sprint, board, boardRowIndex, sprintRowIndex });
      await factory(Task)().create(task);
      index += 1;
    }

    // index = 0;
    // const files = await factory(File)().makeMany(MAXNUM * 10);
    // for await (const file of files) {
    //   const task = tasks[Math.floor(index / 2)];
    //   Object.assign(file, { task });
    //   await factory(File)().create(file);
    //   index += 1;
    // }

    // TODO file
    // TODO comments
    // TODO task_label
    // TODO user_task ㅜㅜ
    // TODO actions

    /*
    action에는 task, sprint, user, project, comment가 들어간다 -> forLoop을 돌리는 친구
    */
  }
}
