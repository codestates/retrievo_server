// import { MyContext } from "src/types";
// import argon2 from "argon2";
// import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constrants";
// import { validateRegister } from "../utils/validateRegister";
// import { sendEmail } from "../utils/sendEmail";
// import { getConnection } from "typeorm";
import { Resolver, Query } from "type-graphql";
import SocialLogin from "../entities/SocialLogins";

@Resolver()
export class SocialLoginResolver {
  @Query(() => [SocialLogin], { nullable: true })
  async me(): Promise<SocialLogin[] | null> {
    return await SocialLogin.find({});
  }

  // async socialLogin(
  //   // @Arg("user_id") userId: string
  // ): Promise<SocialLogin | undefined> {
  //   return await SocialLogin.findOne(userId);
  // }
}

export default SocialLoginResolver;
