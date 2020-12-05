import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  Query,
  UseMiddleware,
} from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import checkAuthStatus from "../middleware/isAuth";
import { MyContext } from "../types";
import User, { roleTypes } from "../entities/User";
import { hashPassword } from "../utils/authUtils";
import UserResponse from "./types/UserResponse";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";
import generateError, { errorKeys } from "../utils/ErrorFactory";

@Resolver()
export class UserResolver {
  @Query(() => UserResponse)
  @UseMiddleware(checkAuthStatus)
  async user(@Arg("id") id: string): Promise<UserResponse> {
    try {
      console.log(
        "errorKeys 작동하면 오늘 치킨 쏩니다",
        errorKeys.AUTH_NOT_FOUND
      );
      const user = await User.findOne({ id });
      if (!user) {
        return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
        // Error -> modify 최종적으로 에러를 던져준다.
      }
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
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput
  ): Promise<UserResponse> {
    try {
      const hashed = await hashPassword(options.password);
      if (hashed instanceof Error) {
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      }

      const user = await User.create({
        username: options.username,
        email: options.email,
        password: hashed,
      }).save();

      return { user };
    } catch (error) {
      if (error.code === "23505") {
        // duplicate username error
        return {
          error: generateError(errorKeys.AUTH_NOT_MATCH, "email"),
        };
      }
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
        await context.login(user);
        const localUser = await User.findOne({ email });
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
