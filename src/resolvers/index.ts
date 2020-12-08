import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { SprintResolver } from "./sprint";
import { TaskResolver } from "./task";
import { TaskLabelResolver } from "./taskLabel";

const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  SprintResolver,
  TaskResolver,
  TaskLabelResolver,
] as const;
export default resolvers;
