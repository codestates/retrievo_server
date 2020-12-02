import { define } from "typeorm-seeding";
import Faker from "faker";
import _ from "lodash";

// entities
import TaskLabel from "../entities/TaskLabel";
import User, { roleTypes } from "../entities/User";
import Project from "../entities/Project";
import Task from "../entities/Task";
import ProjectPermission from "../entities/ProjectPermission";
import SocialLogin, { socialProviderType } from "../entities/SocialLogins";
import Comment from "../entities/Comment";
import Sprint from "../entities/Sprint";
import Board from "../entities/Board";
import Label from "../entities/Label";
import File from "../entities/File";
import UserTask from "../entities/UserTask";
import CommentNotification from "../entities/CommentNotification";
import TaskNotification, {
  taskNotificationType,
} from "../entities/TaskNotification";
import SprintNotification, {
  sprintNotificationType,
} from "../entities/SprintNotification";

define(User, (faker: typeof Faker) => {
  const roles = [roleTypes.MEMBER, roleTypes.ADMIN];

  const user = new User();
  user.id = faker.random.uuid();
  user.username = faker.name.findName();
  user.email = faker.internet.email();
  user.password = faker.random.word();
  user.role = roles[_.random(0, roles.length - 1)];
  return user;
});

define(SocialLogin, (faker: typeof Faker) => {
  const renderSocialProvider = (): socialProviderType => {
    const socialProviderArray = [
      socialProviderType.GITHUB,
      socialProviderType.GOOGLE,
    ];
    return socialProviderArray[_.random(0, socialProviderArray.length - 1)];
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
  sprint.row = faker.random.number();
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
  const colorTypes = ["RED", "BLUE", "GREEN", "ORANGE", "PINK"];
  const label = new Label();
  label.id = faker.random.uuid();
  label.name = faker.random.word();
  label.color = colorTypes[_.random(0, colorTypes.length - 1)];
  return label;
});

define(Board, (faker: typeof Faker) => {
  const board = new Board();
  board.id = faker.random.uuid();
  board.title = faker.random.words();
  return board;
});

define(UserTask, (faker: typeof Faker) => {
  const userTask = new UserTask();
  userTask.id = faker.random.uuid();
  return userTask;
});

define(TaskLabel, (faker: typeof Faker) => {
  const taskLabel = new TaskLabel();
  taskLabel.id = faker.random.uuid();
  return taskLabel;
});

define(TaskNotification, (faker: typeof Faker) => {
  const types = [
    taskNotificationType.CREATED,
    taskNotificationType.STATUS_CHANGED,
  ];

  const taskNotification = new TaskNotification();
  taskNotification.id = faker.random.uuid();
  taskNotification.isRead = faker.random.boolean();
  taskNotification.type = types[_.random(0, 1)];
  return taskNotification;
});

define(SprintNotification, (faker: typeof Faker) => {
  const types = [
    sprintNotificationType.SPRINT_START,
    sprintNotificationType.SPRINT_END,
  ];
  const sprintNotification = new SprintNotification();
  sprintNotification.id = faker.random.uuid();
  sprintNotification.isRead = faker.random.boolean();
  sprintNotification.type = types[_.random(0, types.length - 1)];
  return sprintNotification;
});

define(CommentNotification, (faker: typeof Faker) => {
  const commentNotification = new CommentNotification();
  commentNotification.id = faker.random.uuid();
  commentNotification.isRead = faker.random.boolean();
  return commentNotification;
});
