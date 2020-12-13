import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";
import generateError, { errorKeys } from "../utils/ErrorFactory";
import ProjectPermission from "../entities/ProjectPermission";

export const checkAdminPermission: MiddlewareFn<MyContext> = async (
  { context, args },
  next
) => {
  const userId = context.req.session.passport?.user;
  const { projectId } = args;
  try {
    const userPermission = await ProjectPermission.findOne({
      where: {
        user: userId,
        project: projectId,
      },
    });

    if (!userPermission || !userPermission?.isAdmin)
      return { error: generateError(errorKeys.AUTH_NO_PERMISSION) };
  } catch (_) {
    return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
  }
  console.log("!!!admin permission pass!!!");
  return await next();
};

export default checkAdminPermission;
