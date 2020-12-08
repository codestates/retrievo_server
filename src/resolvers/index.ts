import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { SprintResolver } from "./sprint";
import { TaskResolver } from "./task";
import { TaskLabelResolver } from "./taskLabel";
import { LabelResolver } from "./label";

const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  SprintResolver,
  TaskResolver,
  TaskLabelResolver,
  LabelResolver,
] as const;
export default resolvers;
