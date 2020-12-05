import {
  Resolver,
  Ctx,
  // Arg,
  // Mutation,
  Query,
  // Mutation,
  // UseMiddleware,
} from "type-graphql";
import { prod } from "../constants";
import { MyContext } from "../types";
import Project from "../entities/Project";
import generateError, { errorKeys } from "../utils/ErrorFactory";
// import checkAuthStatus from "../middleware/checkAuthStatus";
import { FieldError } from "./types/UserResponse";
// import checkIfGuest from "../middleware/checkIfGuest";
// import checkProjectPermission from "../middleware/checkProjectPermission";
// import { prod } from "../constants";

@Resolver()
export class ProjectResolver {
  @Query(() => Project)
  async project(
    @Ctx() context: MyContext
  ): Promise<Project | { error: FieldError }> {
    const projectId = prod
      ? context.req.query.projectId
      : "4f1ca847-5d88-4120-a792-d5340be631e8";

    if (!projectId) return { error: generateError(errorKeys.DATA_NOT_FOUND) };

    try {
      const project = await Project.findOne({ where: { id: projectId } });
      return project || { error: generateError(errorKeys.DATA_NOT_FOUND) };
    } catch (err) {
      return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
    }
  }
}
export default ProjectResolver;

/*

  Mutation
  3. createProject: Project id를 받아서 정보를 생성
  4. updateProject: Project id를 받아서 정보를 수정
  5. deleteProject: Project id를 받아서 해당 프로젝트를 삭제

  프론트에서 맴버를 추가하고싶다
  */
// @Query(() => Project)
// async project(
//   @Ctx() context: MyContext,
//   @Arg("projectId") projectId: string
// ): Promise<Project | { error: FieldError }> {
// 	const
//   if (!userId) {
//     return { error: generateError(errorKeys.AUTH_NOT_FOUND) };
//   }

//   try {
//     const projects = await Project.createQueryBuilder("projects")
//       .leftJoinAndSelect(
//         "project_permission.project",
//         "project.projectPermissions"
//       )
//       .where(`project_permission.user = ${userId}`)
//       .getMany();

//     if (!projects) return { error: generateError(errorKeys.DATA_NOT_FOUND) };
//     return projects;
//   } catch (err) {
//     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
//   }
// }

// @Mutation(() => UserResponse)
// async register(
//   @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
//   @Ctx() context: MyContext
// ): Promise<UserResponse> {
//   try {
//     // NOTE 환경변수가 prod 면 hashPassword 작동여부 판단
//     let hashed;
//     if (prod) {
//       hashed = await hashPassword(options.password);
//       if (hashed instanceof Error)
//         return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
//     }

//     const doesUserExist = await User.findOne({ email: options.email });
//     if (doesUserExist)
//       return { error: generateError(errorKeys.AUTH_ALREADY_EXIST) };

//     const newUser = await User.create({
//       username: options.username,
//       email: options.email,
//       password: hashed || options.password,
//     }).save();

//     if (newUser) {
//       const { user } = await context.authenticate("graphql-local", {
//         email: options.email,
//         password: options.password,
//       });
//       if (user) await context.login(user);
//     }
//     return { user: newUser };
//   } catch (error) {
//     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
//   }
// }

// @Mutation(() => UserResponse)
// async login(
//   @Arg("email") email: string,
//   @Arg("password") password: string,
//   @Ctx() context: MyContext
// ): Promise<UserResponse | Error> {
//   try {
//     const { user } = await context.authenticate("graphql-local", {
//       email,
//       password,
//     });

//     if (user) {
//       const localUser = await User.findOne({ email });
//       await context.login(user);

//       // FIXME 프로젝트 리졸버가 완성됬을 때 절 지워주세요 TT
//       // if (context.req.session) {
//       //   context.req.session.projectId =
//       //     "f00c4326-77cd-4e7e-85a2-cfacbf736c55";
//       // }
//       return { user: localUser };
//     }
//     return {
//       error: generateError(errorKeys.AUTH_NOT_MATCH, "email"),
//     };
//   } catch (err) {
//     return { error: generateError(errorKeys.INTERNAL_SERVER_ERROR) };
//   }
// }
