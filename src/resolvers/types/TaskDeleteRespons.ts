import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";

@ObjectType()
export class TaskDeleteResponse {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default TaskDeleteResponse;
