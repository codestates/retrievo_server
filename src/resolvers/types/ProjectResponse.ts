import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./UserResponse";
import Project from "../../entities/Project";

@ObjectType()
export class ProjectReturnType {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Project, { nullable: true })
  project?: Project;

  @Field(() => Boolean, { nullable: true })
  field?: boolean;
}

export default ProjectReturnType;
