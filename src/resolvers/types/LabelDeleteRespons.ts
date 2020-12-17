import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";

@ObjectType()
export class LabelDeleteResponse {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default LabelDeleteResponse;
