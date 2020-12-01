import { SocialLoginResolver } from "./socialLogin";
import { UserResolver } from "./user";

const resolvers = [UserResolver, SocialLoginResolver] as const;
export default resolvers;
