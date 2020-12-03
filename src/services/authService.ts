import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { GraphQLLocalStrategy } from "graphql-passport";
import { getManager } from "typeorm";
import { redis } from "../index";
import { verifyPassword } from "../utils/authUtils";
import User from "../entities/User";
import SocialLogins from "../entities/SocialLogins";

const myPassport = new passport.Passport();

myPassport.serializeUser((user: any, done): void => {
  done(null, user.id);
});

myPassport.deserializeUser(async (id: string, done) => {
  const user = await User.findOne(id);
  done(null, user);
});

/// /////////////////
/// / localLogin ////
/// /////////////////

myPassport.use(
  new GraphQLLocalStrategy(
    async (
      email: unknown,
      password: unknown,
      done: (error: string | null, data: User | null) => void
    ) => {
      const user = await User.findOne({ where: { email } });
      if (!user) return done("Cannot find the user", null);

      const isVerified = await verifyPassword(
        user.password as string,
        password as string
      );

      if (isVerified) return done(null, user);

      return done("Invalid Password", null);
    }
  )
);

/// /////////////////
/// /SocialLogins////
/// /////////////////

// google
const googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
};

// github
const githubOptions = {
  clientID: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
  callbackURL: process.env.GITHUB_CALLBACK_URL as string,
  scope: ["user:email"],
};

const socialCallback = async (
  accessToken: string,
  _refreshToken: string,
  profile: any,
  done: any
) => {
  try {
    const userId = await redis.get(accessToken);
    const user = await User.findOne({ where: { socialLogin: userId } });
    // 회원가입하지 않은 유저라면
    if (!user) {
      // SocialLogin&User 생성
      let username = "";
      if (profile.provider === "github") {
        username = profile.username;
      }
      if (profile.provider === "google") {
        username = `${profile.name.givenName} ${profile.name.familyName}`;
      }

      let newUser;
      const em = getManager();
      await em.transaction(async (transactionalEntityManager) => {
        const newSocialLogin = await em.create(SocialLogins, {
          providerId: profile.id,
          socialProvider: profile.provider,
        });
        await transactionalEntityManager.save(newSocialLogin);
        const tempUser = await em.create(User, {
          socialLogin: newSocialLogin,
          username,
          email: profile.emails && profile.emails[0] && profile.emails[0].value,
        });
        newUser = await transactionalEntityManager.save(tempUser);
      });

      done(null, newUser);
    } else {
      done(null, user);
    }
    // 로그인 시켜버리기
  } catch (err) {
    // TODO 에러핸들링
    console.log("소셜 로그인 에러 발생:", err);
  }

  // TODO: permission 확인 util 실행

  return undefined; // TODO delete
  // 유저가 우리 시스템에 존재한다면 로그인을 시켜준다
  // 2-1. 존재한다면
  // 2. User에서 SocialLogin_id가 일치하는 User를 찾는다
  // 2-2. 만약 없다면 SocialLogin 과 User 생성
  // let username = "";

  // 3 찾은 UserId를 Session에 담아준다
  // 3-1. 만약 있다면 Session에 UserId를 반환한다
  // a. 그 토큰을 가진 사람을 User에서 찾는다.
  // if (user) {
  //   done(null, user);
  //   return;
  // }

  // a. Social Login을 생성
  // profile.provider로 social api 분기 처리
  // if (profile.provider === "github") {
  //   username = profile.username;
  // }
  // if (profile.provider === "google") {
  //   username = `${profile.name.givenName} ${profile.name.familyName}`;
  // }

  // b. User를 생성
  // const newUser = {
  //   // id: uuid(), 알아서 생성해줌
  //   socialId: profile.id,
  //   username,
  //   email: profile.emails && profile.emails[0] && profile.emails[0].value,
  // };
  // users.push(newUser); db에 추가하는 부분
  // SocialLogins.create({

  // })
  // done(null, newUser);???
};

myPassport.use(new GoogleStrategy(googleOptions, socialCallback));
myPassport.use(new GitHubStrategy(githubOptions, socialCallback));

export default myPassport;
