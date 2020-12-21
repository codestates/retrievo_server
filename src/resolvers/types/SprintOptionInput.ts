import { InputType, Field } from "type-graphql";
// test
@InputType()
export class SprintOptionInput {
  @Field()
  id!: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  didStart?: boolean;

  @Field({ nullable: true })
  isCompleted?: boolean;

  @Field({ nullable: true })
  row?: number;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: true })
  startedAt?: Date;
}

export default SprintOptionInput;
