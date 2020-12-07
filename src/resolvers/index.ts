import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { SprintResolver } from "./sprint";
import { TaskResolver } from "./task";


const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  SprintResolver,
  TaskResolver,
] as const;
export default resolvers;
