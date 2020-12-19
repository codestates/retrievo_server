import { InputType, Field } from "type-graphql";

@InputType()
export class TaskCreateInput {
  @Field(() => String, { nullable: true })
  rootTaskId?: string;

  @Field()
  title!: string;

  @Field(() => String)
  sprintId!: string;

  @Field(() => String, { nullable: true })
  boardId?: string;
}

export default TaskCreateInput;
