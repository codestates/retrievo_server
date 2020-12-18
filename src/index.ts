// lib
import "reflect-metadata";
import express from "express";
import session from "express-session";
// import cors from "cors";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { buildContext } from "graphql-passport";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv-safe";
import resolvers from "./resolvers";
import { COOKIE_NAME, prod } from "./constants";
// local
// passport need env
dotenv.config({ example: ".env" });
/* eslint-disable */
import passport from "./services/authService";
import path from "path";
// redis Setting (before apollo middleware)
const RedisStore = connectRedis(session);
export const redis = new Redis();
const main = async () => {
  // orm Setting
  await createConnection();
  // express Setting
  const app = express();
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  // app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //     credentials: true,
  //   })
  // );

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
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/", express.static(path.resolve(__dirname, "../client/build")));
  const routes = [
    "/graphql",
    "/subscriptions",
    "/playground",
    "/auth/google",
    "/auth/github",
    "/auth/google/callback",
    "/auth/github/callback",
  ];

  app.get("*", (req, res, next) => {
    if (routes.includes(req.url)) {
      return next();
    }

    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  app.get(
    "/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://retrievo.io/project/dashboard",
      failureRedirect: "http://retrievo.io/not-found",
    })
  );
  app.get(
    "/auth/github/callback",
    passport.authenticate("github", {
      successRedirect: "http://retrievo.io/project/dashboard",
      failureRedirect: "http://retrievo.io/not-found",
    })
  );
  // apollo Setting
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
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
    cors: corsOptions,
  });
  const PORT = process.env.ENVIRONMENT || 4000;
  app.listen(PORT, () => {
    console.log(`🐶Retrievo Server is running : Port ${PORT}🐶`);
  });
};
main().catch((err) => {
  console.log(err);
});
