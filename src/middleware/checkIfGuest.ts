import { MiddlewareFn } from "type-graphql";
import User from "../entities/User";
import { MyContext } from "../types";
import generateError, { errorKeys } from "../utils/ErrorFactory";

export const checkIfGuest: MiddlewareFn<MyContext> = async (
  { context },
  next
) => {
  const userId = context.req.session.passport?.user;
  try {
    const currentUser = await User.findOne({ id: userId });

    if (currentUser?.role === "guest") {
      return { error: generateError(errorKeys.AUTH_NO_PERMISSION) };
    }
  } catch (err) {
    return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  }
  return await next();
};

export default checkIfGuest;
