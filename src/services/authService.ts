import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { GraphQLLocalStrategy } from "graphql-passport";
import { getManager } from "typeorm";
// import { redis } from "../index";
import { ApolloError } from "apollo-server-express";
import { verifyPassword } from "../utils/authUtils";
import User from "../entities/User";
import SocialLogins from "../entities/SocialLogins";

const myPassport = new passport.Passport();

myPassport.serializeUser((user: any, done): void => {
  done(null, user.id);
});

myPassport.deserializeUser(async (id: string, done) => {
  if (id) {
    const user = await User.findOne(id);
    done(null, user);
  } else {
    console.log("desc Error: no id");
  }
});

/// /////////////////
/// / localLogin ////
/// /////////////////

myPassport.use(
  new GraphQLLocalStrategy(
    async (
      email: unknown,
      password: unknown,
      done: (error: Error | null, data: User | null) => void
    ) => {
      console.log("Local Strategy 실행이 됐");
      const user = await User.findOne({ where: { email } });
      if (!user) return done(new Error("Cannot find the user"), null);

      try {
        const isVerified = await verifyPassword(
          user.password as string,
          password as string
        );
        if (isVerified) return done(null, user);
      } catch (err) {
        console.log("grapqhql local stretgy error:", err);
      }
      return done(new Error("no matching user"), null);
    }
  )
);

/// /////////////////
/// /SocialLogins////
/// /////////////////

const googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
};

const githubOptions = {
  clientID: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
  callbackURL: process.env.GITHUB_CALLBACK_URL as string,
  scope: ["user:email"],
};

const socialCallback = async (
  _accessToken: string,
  _refreshToken: string,
  profile: any,
  done: any
) => {
  try {
    const socialUser = await SocialLogins.findOne({
      where: { providerId: profile.id },
    });

    const email = profile.emails[0]?.value;
    const hasEmail = await User.findOne({ email });

    if (!socialUser && hasEmail) {
      throw new ApolloError("User already exists", "401");
    }

    if (!socialUser) {
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
          email,
        });
        newUser = await transactionalEntityManager.save(tempUser);
      });

      done(null, newUser);
    } else {
      const user = await User.findOne({ where: { email } });
      done(null, user);
    }
  } catch (err) {
    // TODO 에러핸들링
    console.log("소셜 로그인 에러 발생:", err);
  }

  // TODO: invitation 확인 util 실행
  return undefined; // TODO delete
};

myPassport.use(new GoogleStrategy(googleOptions, socialCallback));
myPassport.use(new GitHubStrategy(githubOptions, socialCallback));

export default myPassport;
