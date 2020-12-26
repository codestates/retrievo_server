import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

export const checkAuthStatus: MiddlewareFn<MyContext> = async (
  { context },
  next
) => {
  console.log("--start checkAuthStatus--");
  const currentUser = context.req.session.passport?.user;
  if (!currentUser)
    throw new AuthenticationError("Please login to access to the service 😱");
  console.log("!!!checkAuthStatus pass!!!");
  return next();
};

export default checkAuthStatus;
