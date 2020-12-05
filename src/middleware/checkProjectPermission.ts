import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import ProjectPermission from "../entities/ProjectPermission";

export const checkProjectPermission: MiddlewareFn<MyContext> = async (
  { context },
  next
) => {
  const userId = context.req.session.passport?.user;
  const projectId = context.req.session?.projectId;
  try {
    const hasPermission = await ProjectPermission.findOne({
      where: {
        user: userId,
        project: projectId,
      },
    });

    if (!hasPermission)
      return { error: generateError(errorKeys.AUTH_NO_PERMISSION) };
  } catch (err) {
    return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  }
  return await next();
};

export default checkProjectPermission;
