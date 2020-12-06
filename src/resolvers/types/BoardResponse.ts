import { Field, ObjectType } from "type-graphql";
import Project from "../../entities/Project";
import { FieldError } from "./UserResponse";

@ObjectType()
export class BoardResponse {
  @Field(() => Project, { nullable: true })
  boards?: Project;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default BoardResponse;
