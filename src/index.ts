// lib
import "reflect-metadata";
import express from "express";
import session from "express-session";
import cors from "cors";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import passport from "passport";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";
import { buildSchema } from "type-graphql";
import { createConnection, getManager } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import https from "https";
import fs from "fs";
// local
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import { COOKIE_NAME, __prod__ } from "./constrants";
import { verifyPassword, hashPassword } from "./utils/authUtils";

import dotenv from "dotenv-safe";
dotenv.config({ example: "./.env" });

const main = async () => {
	//orm Setting
	await createConnection({
		type: "postgres",
		database: "retrievo_dev",
		host: process.env.POSTGRES_HOST,
		port: 5432,
		username: process.env.POSTGRES_USERNAME || "postgres",
		password: process.env.POSTGRES_PASSWORD || "root",
		logging: true,
		synchronize: true, // projection에선 제외해야함,
		entities: [User],
	});

	//passport setting
	passport.serializeUser((user: any, done): void => {
		done(null, user.id);
	});

	passport.deserializeUser(async (id: string, done) => {
		const user = await User.findOne(id);
		done(null, user);
	});

	//일반 로그인
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

	//redis Setting (before apollo middleware)
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
				maxAge: 1000 * 60 * 60 * 24 * 30, //1 month
				httpOnly: true,
				sameSite: "lax", //csrf
				secure: __prod__, //cookie only work in https
			},
			saveUninitialized: false,
			secret: "retra234-asd2-a2gfsad-65623asjkdf", //환경변수로 숨기는게 좋음
			resave: false,
		})
	);

	app.get("/", (req, res) => {
		res.send("<h1>Hi this is retrievo!</h1>");
	});

	//apollo Setting

	const configurations = {
		// Note: You may need sudo to run on port 443
		production: { ssl: true, port: 4000, hostname: "54.180.201.19" },
		development: { ssl: false, port: 4000, hostname: "localhost" },
	};

	const environment = process.env.NODE_ENV || "development";
	const config = configurations[environment];

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver],
			validate: false,
		}),
		context: ({ req, res }) => buildContext({ req, res }),
		// 모든 resolver에 전달되는 object
	});

	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	let server = http.createServer(app);

	//open app
	app.listen(4000, () => {
		console.log(
			"🚀 Server ready at",
			`http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
				apolloServer.graphqlPath
			}`
		);
	});
};

main().catch((err) => {
	console.log(err);
});

//I am here for action test
// 과연 circleci는 작동할 것인가ㅏ...(test3)
