import { InputType, Field } from "type-graphql";

@InputType()
export class LabelUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  color?: string;
}

export default LabelUpdateInput;
