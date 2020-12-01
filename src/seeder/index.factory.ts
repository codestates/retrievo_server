import { define } from "typeorm-seeding";
import Faker from "faker";
import _ from "lodash";

// entities
import User, { roleTypes } from "../entities/User";
import Project from "../entities/Project";
import Task from "../entities/Task";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin, { socialProviderType } from "../entities/SocialLogins";
import Comment from "../entities/Comment";
import Sprint from "../entities/Sprint";
import Action, { actionType } from "../entities/Action";
import Board from "../entities/Board";
import Label from "../entities/Label";
import File from "../entities/File";

define(User, (faker: typeof Faker) => {
  const roles = [roleTypes.MEMBER, roleTypes.GUEST, roleTypes.ADMIN];

  const user = new User();
  user.id = faker.random.uuid();
  user.username = faker.name.findName();
  user.email = faker.internet.email();
  user.password = faker.random.word();
  user.role = roles[Math.floor(Math.random() * 3)];
  return user;
});

define(SocialLogin, (faker: typeof Faker) => {
  const renderSocialProvider = (): socialProviderType => {
    const socialProviderArray = [
      socialProviderType.GITHUB,
      socialProviderType.GOOGLE,
    ];
    return socialProviderArray[Math.floor(Math.random() * 2)];
  };

  const socialLogin = new SocialLogin();
  socialLogin.id = faker.random.uuid();
  socialLogin.providerId = faker.random.word();
  socialLogin.socialProvider = renderSocialProvider();
  return socialLogin;
});

define(ProjectPermission, (faker: typeof Faker) => {
  const projectPermission = new ProjectPermission();
  projectPermission.id = faker.random.uuid();
  projectPermission.isAdmin = faker.random.boolean();
  return projectPermission;
});

define(Project, (faker: typeof Faker) => {
  const project = new Project();
  project.id = faker.random.uuid();
  project.name = faker.company.companyName();
  project.logo = faker.image.imageUrl();
  return project;
});

define(Action, (faker: typeof Faker) => {
  const types = [
    actionType.TASK_ASSIGNMENT,
    actionType.TASK_STATUS_CHANGE,
    actionType.COMMENT_NEW,
    actionType.SPRINT_START,
    actionType.SPRINT_END,
  ];

  const action = new Action();
  action.id = faker.random.uuid();
  action.description = types[_.random(0, 4)];
  return action;
});

define(Task, (faker: typeof Faker) => {
  const task = new Task();
  task.id = faker.random.uuid();
  task.title = faker.random.words();
  task.description = faker.lorem.sentence();
  task.startDate = faker.date.past();
  task.endDate = faker.date.future();
  return task;
});

define(Comment, (faker: typeof Faker) => {
  const comment = new Comment();
  comment.id = faker.random.uuid();
  comment.rootCommentId = faker.random.uuid();
  comment.content = faker.random.words();
  return comment;
});

define(Sprint, (faker: typeof Faker) => {
  const sprint = new Sprint();
  sprint.id = faker.random.uuid();
  sprint.title = faker.random.words();
  sprint.description = faker.lorem.sentence();
  sprint.boardRow = faker.random.number();
  sprint.startedAt = faker.date.recent();
  sprint.dueDate = faker.date.future();
  return sprint;
});

define(File, (faker: typeof Faker) => {
  const file = new File();
  file.id = faker.random.uuid();
  file.fileLink = faker.system.fileName();
  return file;
});

define(Label, (faker: typeof Faker) => {
  const label = new Label();
  label.id = faker.random.uuid();
  label.name = faker.random.word();
  label.color = faker.commerce.color();
  return label;
});

define(Board, (faker: typeof Faker) => {
  const board = new Board();
  board.id = faker.random.uuid();
  board.title = faker.random.words();
  return board;
});
