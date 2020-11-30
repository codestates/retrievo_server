// import { MyContext } from "src/types";
// import argon2 from "argon2";
// import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constrants";
// import { validateRegister } from "../utils/validateRegister";
// import { sendEmail } from "../utils/sendEmail";
// import { getConnection } from "typeorm";
import { Resolver, Ctx, Arg, Mutation, Query } from "type-graphql";
import User from "../entities/User";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { hashPassword } from "../utils/authUtils";
import { UserResponse } from "./UserResponse";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | null> {
    return await User.find({});
  }

  // @Mutation(() => UserResponse)
  // async changePassword(
  //   @Arg("token") token: string,
  //   @Arg("newPassword") newPassword: string,
  //   // @Ctx() { redis, req }: MyContext
  // ): Promise<UserResponse> {
  //   if (newPassword.length <= 2) {
  //     return {
  //       errors: [
  //         { field: "newPassword", message: "length must be greater than 2" },
  //       ],
  //     };
  //   }
  // const key = FORGET_PASSWORD_PREFIX + token;
  // const userId = await redis.get(key);
  // if (!userId) {
  //   return {
  //     errors: [{ field: "token", message: "token expired" }],
  //   };
  // }
  // const userIdNum = parseInt(userId);
  // const user = await User.findOne(userIdNum);
  // if (!user) {
  //   return { errors: [{ field: "token", message: "user no longer exists" }] };
  // }
  // await User.update(
  //   { id: userIdNum },
  //   // {
  //   //   password: await argon2.hash(newPassword),
  //   // }
  // );
  // await redis.del(key);
  // req.session.userId = user.id;
  // return { user };
  // }
  // @Mutation(() => Boolean)
  // async forgotPassword(
  //   @Arg("email") email: string,
  //   @Ctx() { redis }: MyContext
  // ) {
  //   const user = await User.findOne({ where: { email } });
  //   if (!user) {
  //     //the email is not in the db
  //     return true;
  //   }
  //   const token = v4();
  //   // 3일 후에 소멸되는 token
  //   redis.set(
  //     FORGET_PASSWORD_PREFIX + token,
  //     user.id,
  //     "ex",
  //     1000 * 60 * 60 * 24 * 3
  //   );
  //   await sendEmail(
  //     email,
  //     `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
  //   );
  //   return true;
  // }
  // @Query(() => User, { nullable: true })
  // async me(@Ctx() { req }: MyContext) {
  //   //you are not logged In
  //   if (!req.session.userId) {
  //     return null;
  //   }
  //   // 비동기 작업이 하나라면 바로 return 시켜라
  //   return User.findOne(req.session.userId);
  // }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() context: any // FIXME
  ): Promise<UserResponse | undefined> {
    // const errors = validateRegister(options);
    // if (errors) return { errors };
    const hashed = await hashPassword(options.password);
    if (!hashed) {
      return {
        errors: [
          {
            field: "password",
            message: "Internal Server Error",
            code: 500,
          },
        ],
      };
    }

    try {
      const user = await User.create({
        username: options.username,
        email: options.email,
        password: hashed,
      }).save();
      // user = result.raw[0];
      context.req.session.userId = user.id;
      return { user };
    } catch (error) {
      if (error.code === "23505") {
        // duplicate username error
        return {
          errors: [
            {
              field: "username",
              message: `${options.username} alredy exists`,
              code: 402,
            },
          ],
        };
      }

      return {
        errors: [
          {
            field: "Error",
            message: "Something bad happened 😱",
            code: 500,
          },
        ],
      };
    }
  }

  //   @Mutation(() => UserResponse)
  //   async login(
  //     @Arg("usernameOrEmail") usernameOrEmail: string,
  //     @Arg("password") password: string,
  //     @Ctx() { req }: MyContext
  //   ): Promise<UserResponse> {
  //     const user = await User.findOne(
  //       usernameOrEmail.includes("@")
  //         ? { where: { email: usernameOrEmail } }
  //         : { where: { username: usernameOrEmail } }
  //     );
  //     if (!user) {
  //       return {
  //         errors: [
  //           { field: "usernameOrEmail", message: "that username doesn't exist" },
  //         ],
  //       };
  //     }
  //     const valid = await argon2.verify(user.password, password);
  //     if (!valid) {
  //       return {
  //         errors: [{ field: "password", message: "password not matched" }],
  //       };
  //     }
  //     req.session.userId = user.id;
  //     return { user };
  //   }
  //   @Mutation(() => Boolean)
  //   async logout(@Ctx() { req, res }: MyContext) {
  //     return new Promise((resolve) =>
  //       req.session.destroy((err) => {
  //         res.clearCookie(COOKIE_NAME);
  //         if (err) {
  //           console.log(err);
  //           resolve(false);
  //           return;
  //         }
  //         resolve(true);
  //       })
  //     );
  //   }
}

export default UserResolver;
