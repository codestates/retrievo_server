import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  Query,
  UseMiddleware,
} from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import checkAuthStatus from "../middleware/checkAuthStatus";
import { MyContext } from "../types";
import UserResponse from "./types/UserResponse";
import User, { roleTypes } from "../entities/User";
import { hashPassword } from "../utils/authUtils";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkProjectPermission from "../middleware/checkProjectPermission";
import { prod } from "../constants";
// import mailSender from "../services/mailerService";

@Resolver()
export class UserResolver {
  @Query(() => UserResponse)
  @UseMiddleware(checkAuthStatus)
  async user(@Arg("id") id: string): Promise<UserResponse> {
    try {
      const user = await User.findOne({ id });
      if (!user) return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
      return { user };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => UserResponse)
  async createGuest(@Ctx() context: MyContext): Promise<UserResponse> {
    const uuidEmail = `${uuidv4()}@retrievo.io`;

    try {
      const guestUser = await User.create({
        email: uuidEmail,
        username: "Guest",
        role: roleTypes.GUEST,
      }).save();

      const { user } = await context.authenticate("graphql-local", {
        email: uuidEmail,
        password: null,
      });

      if (user) {
        context.login(user);
        return { user: guestUser };
      }
      return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() context: MyContext
  ): Promise<UserResponse> {
    try {
      // NOTE 환경변수가 prod 면 hashPassword 작동여부 판단
      let hashed;
      if (prod) {
        hashed = await hashPassword(options.password);
        if (hashed instanceof Error)
          return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      }

      const doesUserExist = await User.findOne({ email: options.email });
      if (doesUserExist)
        return { error: generateError(errorKeys.AUTH_ALREADY_EXIST) };

      const newUser = await User.create({
        username: options.username,
        email: options.email,
        password: hashed || options.password,
      }).save();

      if (newUser) {
        const { user } = await context.authenticate("graphql-local", {
          email: options.email,
          password: options.password,
        });
        if (user) await context.login(user);
      }
      return { user: newUser };
    } catch (error) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() context: MyContext
  ): Promise<UserResponse | Error> {
    try {
      const { user } = await context.authenticate("graphql-local", {
        email,
        password,
      });

      if (user) {
        const localUser = await User.findOne({ email });
        await context.login(user);

        // FIXME 프로젝트 리졸버가 완성됬을 때 절 지워주세요 TT
        // if (context.req.session) {
        //   context.req.session.projectId =
        //     "f00c4326-77cd-4e7e-85a2-cfacbf736c55";
        // }
        return { user: localUser };
      }
      return {
        error: generateError(errorKeys.AUTH_NOT_MATCH, "email"),
      };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default UserResolver;
