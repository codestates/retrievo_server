import { UserResolver } from "./user";
import { ProjectResolver } from "./project";
import { BoardResolver } from "./board";

const resolvers = [UserResolver, ProjectResolver, BoardResolver] as const;
export default resolvers;
