import {
  Resolver,
  Ctx,
  Arg,
  Mutation,
  Query,
  UseMiddleware,
} from "type-graphql";
import { v4 as uuidv4 } from "uuid";

/* Entities */
import User, { roleTypes } from "../entities/User";
import ProjectPermission from "../entities/ProjectPermission";
import Project from "../entities/Project";

/* Utils */
import UserUpdateOptions from "./types/UserUpdateOptions";
import { hashPassword } from "../utils/authUtils";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import { COOKIE_NAME, prod } from "../constants";

/* Types */
import { MyContext } from "../types";
import { UsernamePasswordInput } from "./types/UsernamePasswordInput";
import UserResponse from "./types/UserResponse";
import ProjectListResponse from "./types/ProjectListResponse";

/* Middleware */
import checkAuthStatus from "../middleware/checkAuthStatus";
import checkIfGuest from "../middleware/checkIfGuest";

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
    const { redis, req } = context;
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

      const { projectId } = req.session;

      if (projectId) {
        const project = await Project.findOne(projectId);
        await ProjectPermission.create({
          user: newUser,
          project,
          isAdmin: false,
        }).save();
      }

      if (newUser) {
        const { user } = await context.authenticate("graphql-local", {
          email: options.email,
          password: options.password,
        });
        if (user) await context.login(user);
      }

      if (req.session.invitationToken) {
        await redis.del(req.session.invitationToken);
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
    const { req, redis } = context;
    try {
      const { user } = await context.authenticate("graphql-local", {
        email,
        password,
      });

      if (user) {
        const localUser = await User.findOne({ email });
        const { projectId } = req.session;

        if (projectId) {
          const project = await Project.findOne(projectId);
          await ProjectPermission.create({
            user: localUser,
            project,
            isAdmin: false,
          }).save();

          if (req.session.invitationToken) {
            await redis.del(req.session.invitationToken);
          }
          await context.login(user);
          return { user: localUser };
        }
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
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  @Query(() => UserResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest])
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

  @Mutation(() => Boolean)
  @UseMiddleware(checkAuthStatus)
  async deleteAccount(@Ctx() { req, res }: MyContext): Promise<boolean> {
    const userId = req.session.passport?.user;
    try {
      const deleteRes = await User.delete({ id: userId });
      if (!deleteRes.affected || deleteRes.affected < 1) return false;

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
    } catch (_) {
      return false;
    }
  }

  @Mutation(() => UserResponse)
  @UseMiddleware([checkAuthStatus, checkIfGuest])
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

  @Query(() => ProjectListResponse)
  @UseMiddleware(checkAuthStatus)
  async projectsOfUser(
    @Ctx() context: MyContext
  ): Promise<ProjectListResponse> {
    const userId = context.req.session.passport?.user;

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
