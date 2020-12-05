import { UserResolver } from "./user";
import { ProjectResolver } from "./project";

const resolvers = [UserResolver, ProjectResolver] as const;
export default resolvers;
