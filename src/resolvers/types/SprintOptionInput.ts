import { InputType, Field } from "type-graphql";
// test
@InputType()
export class SprintOptionInput {
  @Field()
  id!: string;

  @Field()
  title?: string;

  @Field()
  didStart?: boolean;

  @Field()
  isCompleted?: boolean;

  @Field()
  row?: number;

  @Field()
  dueDate?: Date;

  @Field()
  startedAt?: Date;
}

export default SprintOptionInput;
