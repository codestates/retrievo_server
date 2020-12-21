import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";

@ObjectType()
export class CommentDeleteResponse {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default CommentDeleteResponse;
