import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { GraphQLLocalStrategy } from "graphql-passport";
import { getManager } from "typeorm";
import User, { roleTypes } from "../entities/User";
import SocialLogins from "../entities/SocialLogins";
import generateError, {
  errorKeys,
  generateApolloError,
} from "../utils/ErrorFactory";
import { verifyPassword } from "../utils/authUtils";
import { prod } from "../constants";

passport.serializeUser((user: any, done): void => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  if (id) {
    const user = await User.findOne(id);
    return done(null, user);
  }
  return generateError(errorKeys.AUTH_FAIL_DESERIALIZE);
});

passport.use(
  new GraphQLLocalStrategy(
    async (
      email: unknown,
      password: unknown,
      done: (error: Error | null, data: User | null) => void
    ) => {
      const inputEmail = email as string;
      try {
        const user = await User.findOne({ email: inputEmail });

        if (!user)
          return done(generateApolloError(errorKeys.AUTH_NOT_FOUND), null);

        // NOTE 환경변수 prod 에 따라 hash verification 작동여부 판단.
        if (prod) {
          const isVerified = await verifyPassword(
            user.password as string,
            password as string
          );
          if (!isVerified && user.role !== roleTypes.GUEST)
            return done(generateApolloError(errorKeys.AUTH_NOT_MATCH), null);
        }

        if (!prod && user.password !== password)
          return done(generateApolloError(errorKeys.AUTH_NOT_MATCH), null);

        return done(null, user);
      } catch (err) {
        return done(generateApolloError(errorKeys.INTERNAL_SERVER_ERROR), null);
      }
    }
  )
);

/// ///////////////  ///
/// /SocialLogins//  ///
/// ///////////////  ///

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  GITHUB_CLIENT_ID,
  GITHUB_SECRET,
  GITHUB_CALLBACK_URL,
} = process.env;

const googleOptions = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_CALLBACK_URL,
};

const githubOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
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

    if (!socialUser && hasEmail)
      return generateError(errorKeys.AUTH_ALREADY_EXIST);

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
        const tempUser = await em.create(User, {
          username,
          email,
        });
        newUser = await transactionalEntityManager.save(tempUser);

        const newSocialLogin = await em.create(SocialLogins, {
          user: newUser,
          providerId: profile.id,
          socialProvider: profile.provider,
        });
        await transactionalEntityManager.save(newSocialLogin);
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
