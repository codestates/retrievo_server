import { InputType, Field } from "type-graphql";
// test
@InputType()
export class BoardUpdateInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  boardColumnIndex?: number;
}

export default BoardUpdateInput;
