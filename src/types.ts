import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { ObjectType, Field } from "type-graphql";

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: Response;
  redis: Redis;
};

@ObjectType()
export class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;

  @Field()
  code: number;
}
