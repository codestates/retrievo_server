import { Redis } from "ioredis";
import { Session, SessionData } from "express-session";
import { Context } from "graphql-passport/lib/buildContext";

export {};
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Express {
    interface SessionData {
      cookie: any;
    }
  }
}

type UserObject = {
  userId?: string;
}; // FIXME

export type MyContext = Context<UserObject> & {
  req: Request & {
    session: Session &
      Partial<SessionData> & {
        passport?: { user?: string };
        projectId?: string;
      };
  };
  res: Response;
  redis: Redis;
  isAuthenticated: () => boolean;
  isUnauthenticated: () => boolean;
};
