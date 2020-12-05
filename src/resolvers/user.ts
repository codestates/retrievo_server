import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  Query,
  UseMiddleware,
} from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import ProjectPermission from "../entities/ProjectPermission";
import checkAuthStatus from "../middleware/checkAuthStatus";
import { MyContext } from "../types";
import UserResponse from "./types/UserResponse";
import UserUpdateOptions from "./types/UserUpdateOptions";
import User, { roleTypes } from "../entities/User";
import { hashPassword } from "../utils/authUtils";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";
import checkIfGuest from "../middleware/checkIfGuest";
import { COOKIE_NAME, prod } from "../constants";
import ProjectListResponse from "./types/ProjectListResponse";

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
        return { user: localUser };
      }
      return {
        error: generateError(errorKeys.AUTH_NOT_MATCH, "email"),
      };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  @UseMiddleware(checkIfGuest)
  @Query(() => UserResponse)
  async userSetting(@Ctx() context: MyContext): Promise<UserResponse> {
    const userId = context.req.session.passport?.user;
    try {
      const user = await User.findOne({
        where: { id: userId },
        relations: ["projectPermissions", "projectPermissions.project"],
      });
      if (!user) return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
      return { user };
    } catch (_) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @UseMiddleware(checkIfGuest)
  @Mutation(() => UserResponse)
  async updateUserSetting(
    @Arg("options") options: UserUpdateOptions,
    @Ctx() context: MyContext
  ): Promise<UserResponse> {
    try {
      const userId = context.req.session.passport?.user;
      const res = await User.update({ id: userId }, { ...options });

      if (!res.affected || res.affected < 1)
        return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };

      const user = await User.findOne({ id: userId });
      if (!user) return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
      return { user };
    } catch (error) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }

  @UseMiddleware(checkAuthStatus)
  @Query(() => ProjectListResponse)
  async projectsOfUser(
    @Ctx() context: MyContext
  ): Promise<ProjectListResponse> {
    const userId = context.req.session.passport?.user;

    // 1. projectPermission에서 userid가 일치하는것 전부 찾음
    // 2. projectPermission의 Project들을 연동시킴
    // 3-1. 만약 하나도 존재하지 않는다면
    // 3-2. 존재한다면 반환

    // etc: 서버에러
    try {
      const projects = await ProjectPermission.find({
        where: { user: userId },
        relations: ["project"],
      });
      if (!projects) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
      return { projects };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}

export default UserResolver;
