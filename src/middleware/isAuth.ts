import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../resolvers/types/MyContext";

const checkAuthStatus: MiddlewareFn<MyContext> = async ({ context }, next) => {
  console.log("context.req.session", context.req.session);
  const currentUser = context.req.session.passport?.user;
  console.log("나 김정은이야!");
  console.log("currentUser:", currentUser);
  if (!currentUser)
    throw new AuthenticationError("Please login to access to the service 😱");
  return await next();
};

export default checkAuthStatus;
