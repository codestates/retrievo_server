import { Field, ObjectType } from "type-graphql";
import Board from "../../entities/Board";
import { FieldError } from "./UserResponse";

@ObjectType()
export class BoardResponse {
  @Field(() => [Board], { nullable: true })
  boards?: Board[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

export default BoardResponse;
