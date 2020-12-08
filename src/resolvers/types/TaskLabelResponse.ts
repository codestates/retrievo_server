import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";
import TaskLabel from "../../entities/TaskLabel";

@ObjectType()
export class TaskLabelResponse {
  @Field(() => [TaskLabel], { nullable: true })
  taskLabel?: TaskLabel[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default TaskLabelResponse;
