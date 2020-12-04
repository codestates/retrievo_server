import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../resolvers/types/MyContext";

const checkAuthStatus: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const currentUser = context.req.session.passport?.user;
  if (!currentUser)
    throw new AuthenticationError("Please login to access to the service 😱");
  return await next();
};

export default checkAuthStatus;
