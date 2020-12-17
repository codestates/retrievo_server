import { Field, ObjectType } from "type-graphql";
import Task from "../../entities/Task";
import { FieldError } from "./UserResponse";

@ObjectType()
export class SingleTaskResponse {
  @Field(() => Task, { nullable: true })
  task?: Task;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default SingleTaskResponse;
