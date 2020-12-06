import { Field, ObjectType } from "type-graphql";
import Task from "../../entities/Task";
import { FieldError } from "./UserResponse";

@ObjectType()
export class TaskResponse {
  @Field(() => [Task], { nullable: true })
  task?: Task[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default TaskResponse;
