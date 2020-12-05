import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { GraphQLLocalStrategy } from "graphql-passport";
import { getManager } from "typeorm";
import { verifyPassword } from "../utils/authUtils";
import User, { roleTypes } from "../entities/User";
import SocialLogins from "../entities/SocialLogins";
import generateError, {
  errorKeys,
  generateApolloError,
} from "../utils/ErrorFactory";

passport.serializeUser((user: any, done): void => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  if (id) {
    const user = await User.findOne(id);
    return done(null, user);
  }
  return generateError(errorKeys.AUTH_FAIL_DESERIALIZE);
  // throw new AuthenticationError("Failed to deserialize");
});

/// ////////////////// ///
/// // Local Login /// ///
/// ////////////////// ///

passport.use(
  new GraphQLLocalStrategy(
    async (
      email: unknown,
      password: unknown,
      done: (error: Error | null, data: User | null) => void
    ) => {
      const user = await User.findOne({ where: { email } });

      if (!user)
        return done(generateApolloError(errorKeys.AUTH_NOT_FOUND), null);

      try {
        const isVerified = await verifyPassword(
          user.password as string,
          password as string
        );
        if (isVerified || user.role === roleTypes.GUEST)
          return done(null, user);
      } catch (err) {
        return done(generateApolloError(errorKeys.INTERNAL_SERVER_ERROR), null);
      }
      return done(generateApolloError(errorKeys.AUTH_NOT_MATCH), null);
    }
  )
);

/// ///////////////  ///
/// /SocialLogins//  ///
/// ///////////////  ///

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
      return generateError(errorKeys.AUTH_ALREADY_EXIST);
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
    return generateError(errorKeys.INTERNAL_SERVER_ERROR);
  }

  // TODO: invitation 확인 util 실행
  return undefined; // TODO delete
};

passport.use(new GoogleStrategy(googleOptions, socialCallback));
passport.use(new GitHubStrategy(githubOptions, socialCallback));
export default passport;
