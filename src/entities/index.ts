import User from "./User";
import SocialLogin from "./SocialLogins";
import Project from "./Project";
import ProjectPermission from "./ProjectPermission";
import Task from "./Task";
import Sprint from "./Sprint";
import Comment from "./Comment";
import Board from "./Board";
import Label from "./Label";
import File from "./File";
import UserTask from "./UserTask";
import TaskLabel from "./TaskLabel";
import SprintNotification from "./SprintNotification";
import CommentNotification from "./CommentNotification";
import TaskNotification from "./TaskNotification";

const entities = [
  User,
  SocialLogin,
  Project,
  ProjectPermission,
  SprintNotification,
  CommentNotification,
  TaskNotification,
  Task,
  Sprint,
  Comment,
  Board,
  Label,
  File,
  UserTask,
  TaskLabel,
];
export default entities;
