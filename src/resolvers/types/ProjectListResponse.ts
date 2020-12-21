import { Field, ObjectType } from "type-graphql";
import ProjectPermission from "../../entities/ProjectPermission";
import { FieldError } from "./UserResponse";

@ObjectType()
export class ProjectListResponse {
  @Field(() => [ProjectPermission], { nullable: true })
  projects?: ProjectPermission[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default ProjectListResponse;
