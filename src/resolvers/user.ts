// import argon2 from "argon2";
// import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constrants";
// import { validateRegister } from "../utils/validateRegister";
// import { sendEmail } from "../utils/sendEmail";
import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  Query,
  UseMiddleware,
} from "type-graphql";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import { v4 as uuidv4 } from "uuid";
import checkAuthStatus from "../middleware/isAuth";
import { MyContext } from "../types";
import User, { roleTypes } from "../entities/User";
import { hashPassword } from "../utils/authUtils";
import { UserResponse } from "./types/UserResponse";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";

@Resolver()
export class UserResolver {
  @Query(() => User)
  @UseMiddleware(checkAuthStatus)
  async user(@Arg("id") id: string): Promise<User | undefined> {
    try {
      const user = await User.findOne({ id });
      if (!user) {
        throw new ApolloError("User Not Found", "401");
      }
      return user;
    } catch (err) {
      throw new AuthenticationError(err.message);
    }
  }

  // guest 로그인
  // 1) 중요한 기능을 클릭할 때 => 로그인을 하셔야압니다.]
  // 2) 비회원가입하기... username => 버튼 클릭 => 안녕하세요 시영님....

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
      throw new AuthenticationError("User Not Found");
    } catch (err) {
      throw new ApolloError("Internal Server Error", "500");
    }
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput
  ): Promise<UserResponse | undefined> {
    try {
      const hashed = await hashPassword(options.password);
      if (hashed instanceof Error) {
        throw new ApolloError("Internal Server Error", "500");
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
        throw new ApolloError("Email Already Exists", "404", {
          field: "email",
        });
      }

      throw new ApolloError("Interner Server Error", "500");
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() context: MyContext
  ): Promise<UserResponse | undefined> {
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
      throw new ApolloError("No Matching User", "402", { field: "email" });
    } catch (err) {
      throw new ApolloError("Internal Serval Error", "500");
    }
  }
}

export default UserResolver;
