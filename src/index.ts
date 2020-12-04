// lib
import "reflect-metadata";
import express from "express";
import session from "express-session";
import cors from "cors";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { buildContext } from "graphql-passport";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv-safe";
import { UserResolver } from "./resolvers/user";
import { COOKIE_NAME, prod } from "./constants";
// local
// passport need env
dotenv.config({ example: ".env" });
/* eslint-disable */
// import "./services/authService";
import myPassport from "./services/authService";
// import { redis } from "../index";

// redis Setting (before apollo middleware)
const RedisStore = connectRedis(session);
// eslint-disable-next-line import/prefer-default-export
export const redis = new Redis();

const main = async () => {
  // orm Setting
  await createConnection();

  // express Setting
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: prod, // cookie only work in https
      },
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET as string,
      resave: false,
    })
  );

  app.use(myPassport.initialize());
  app.use(myPassport.session());
  //ts-disable
  // app.post(
  //   "/auth/local",
  //   myPassport.authenticate("graphql-local", [
  //     "testKj@rockpaperqueens.com",
  //     "123123",
  //   ])
  // );

  app.get(
    "/auth/google",
    myPassport.authenticate("google", { scope: ["email", "profile"] })
  );

  app.get(
    "/auth/github",
    myPassport.authenticate("github", { scope: ["user:email"] })
  );

  app.get(
    "/auth/google/callback",
    myPassport.authenticate("google", {
      successRedirect: "http://localhost:4000/graphql",
      failureRedirect: "http://localhost:4000/graphql",
    })
  );

  app.get(
    "/auth/github/callback",
    myPassport.authenticate("github", {
      successRedirect: "http://localhost:4000/graphql",
      failureRedirect: "http://localhost:4000/graphql",
    })
  );

  // passport test end

  // apollo Setting
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => {
      return buildContext({ req, res, redis });
    },
    playground: {
      settings: {
        "request.credentials": "same-origin",
      },
    },
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const PORT = process.env.ENVIRONMENT || 4000;
  app.listen(PORT, () => {
    console.log(`🐶Retrievo Server is running : Port ${PORT}🐶`);
  });
};

main().catch((err) => {
  console.log(err);
});
