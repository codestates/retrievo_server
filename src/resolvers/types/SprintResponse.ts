import { Field, ObjectType } from "type-graphql";
import Sprint from "../../entities/Sprint";
// import Task from "../../entities/Task";
import { FieldError } from "./UserResponse";

@ObjectType()
export class SprintResponse {
  @Field(() => Sprint, { nullable: true })
  sprint?: Sprint;

  @Field(() => [Sprint], { nullable: true })
  sprints?: Sprint[];

  // @Field(() => Task, { nullable: true })
  // task?: Task[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Boolean, { nullable: true })
  success?: boolean;
}

export default SprintResponse;
