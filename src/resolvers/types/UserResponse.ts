import { Field, ObjectType } from "type-graphql";
import User from "../../entities/User";

@ObjectType()
export class FieldError {
  @Field()
  code: string;

  @Field()
  message: string;

  @Field({ nullable: true })
  field?: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default UserResponse;
