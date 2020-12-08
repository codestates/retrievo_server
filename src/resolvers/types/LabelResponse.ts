import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./UserResponse";
import Label from "../../entities/Label";

@ObjectType()
export class LabelResponse {
  @Field(() => [Label], { nullable: true })
  label?: Label[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default LabelResponse;
