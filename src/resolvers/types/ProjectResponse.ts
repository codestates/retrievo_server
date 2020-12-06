import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./UserResponse";
import Project from "../../entities/Project";
import ProjectPermission from "../../entities/ProjectPermission";

@ObjectType()
export class ProjectReturnType {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Project, { nullable: true })
  project?: Project;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;
}

@ObjectType()
export class ProjectPermissionReturnType extends ProjectReturnType {
  @Field(() => ProjectPermission, { nullable: true })
  projectPermission?: ProjectPermission;
}

export default ProjectReturnType;
