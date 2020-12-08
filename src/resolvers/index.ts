import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { SprintResolver } from "./sprint";
import { TaskResolver } from "./task";
import { TaskLabelResolver } from "./taskLabel";
import { LabelResolver } from "./label";
import { UserTaskResolver } from "./userTask";

const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  SprintResolver,
  TaskResolver,
  TaskLabelResolver,
  LabelResolver,
  UserTaskResolver,
] as const;
export default resolvers;
