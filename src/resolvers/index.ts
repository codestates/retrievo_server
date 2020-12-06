import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { TaskResolver } from "./task";

const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  TaskResolver,
] as const;
export default resolvers;
