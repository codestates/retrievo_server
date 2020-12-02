// lib
import "reflect-metadata";
import express from "express";
import session from "express-session";
import cors from "cors";
// import Redis from "ioredis";
// import connectRedis from "connect-redis"
import passport from "passport";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
// local
import dotenv from "dotenv-safe";
import User from "./entities/User";
import { COOKIE_NAME, prod } from "./constrants";
import { verifyPassword } from "./utils/authUtils";
import resolvers from "./resolvers";

dotenv.config({ example: "./.env" });
// 이 주석 지우시오

const main = async () => {
  // orm Setting/
  await createConnection();

  // passport setting
  passport.serializeUser((user: any, done): void => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    const user = await User.findOne(id);
    done(null, user);
  });

  // 일반 로그인
  passport.use(
    new GraphQLLocalStrategy(
      async (
        email: unknown,
        password: unknown,
        done: (error: string | null, data: User | null) => void
      ) => {
        const user = await User.findOne({ where: { email } });
        if (!user) return done("Cannot find the user", null);

        const isVerified = await verifyPassword(
          user.password,
          password as string
        );
        if (isVerified) return done(null, user);
        return done("Invalid Password", null);
      }
    )
  );

  const app = express();

  // redis Setting (before apollo middleware)
  // const RedisStore = connectRedis(session);
  // const redis = new Redis();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      // store: new RedisStore({
      //   client: redis,
      //   disableTouch: true,
      // }),
      cookie: {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: prod, // cookie only work in https
      },
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET!,
      resave: false,
    })
  );

  app.get("/", (_, res) => {
    res.send("<h1>Hi this is retrievo!</h1>");
  });

  // apollo Setting
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    context: ({ req, res }) => buildContext({ req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  // open app
  app.listen(4000, () => {
    /* eslint-disable */
    console.log(`

  　　　　 ／  ＞　フ   -------------------------
　　　　　| 　_　 _ l  |  🍖 Retrievo Server 🍖  |
　 　　　／ ミ ＿Y ノ  < CAT is the owner of the world! NOT DOG
　　 　 /　　　 　 |   |       Port: 4000        |
　　　 /　 ヽ　　 ﾉ    |       DB: Local         |
　 　 │　　|　|　|     |                         |
　／￣|　　 |　|　|    | 🐶Retrievo Woof Woof!🐶 |
　| (￣ヽ＿_ヽ_)__)    -----------------------------
　＼二つ
    `);
  });
};

main().catch((err) => {
  console.log(err);
});
