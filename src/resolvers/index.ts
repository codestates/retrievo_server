import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";
import { SprintResolver } from "./sprint";

const resolvers = [
  UserResolver,
  ProjectResolver,
  BoardResolver,
  SprintResolver,
] as const;
export default resolvers;
