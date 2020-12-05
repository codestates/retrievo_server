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
// import { hashPassword } from "../utils/authUtils";
// import checkIfGuest from "../middleware/checkIfGuest";
// import { UsernamePasswordInput } from "./types/";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkProjectPermission from "../middleware/checkProjectPermission";

@Resolver()
export class UserResolver {
  @Query(() => UserResponse)
  @UseMiddleware(checkAuthStatus)
  async user(@Arg("id") id: string): Promise<UserResponse> {
    try {
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
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() context: MyContext
  ): Promise<UserResponse> {
    try {
      // FIXME 테스트 유저를 위해 해싱을 잠시 꺼두겠습니다
      // const hashed = await hashPassword(options.password);
      // if (hashed instanceof Error) {
      //   return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
      // }

      const doesUserExist = await User.findOne({ email: options.email });
      if (doesUserExist) {
        return { error: generateError(errorKeys.AUTH_ALREADY_EXIST) };
      }

      const newUser = await User.create({
        username: options.username,
        email: options.email,
        password: options.password,
        // FIXME password: hashed,
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
        //     "998bbdfb-2af6-48c3-b2c4-499e39371087";
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
