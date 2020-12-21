import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";
import UserTask from "../../entities/UserTask";

@ObjectType()
export class UserTaskResponse {
  @Field(() => [UserTask], { nullable: true })
  userTask?: UserTask[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default UserTaskResponse;
