import { InputType, Field } from "type-graphql";
@InputType()
export class TaskBasicOption {
  @Field()
  title?: string;

  @Field()
  description?: string;

  @Field(() => String)
  startDate?: Date;

  @Field(() => String)
  endDate?: Date;
}
@InputType()
export class TaskUpdateInput {
  @Field()
  id!: string;

  @Field({ nullable: true })
  rootTaskId?: string;

  @Field(() => Number, { nullable: true })
  boardRowIndex?: number;

  @Field(() => Number, { nullable: true })
  sprintRowIndex?: number;

  @Field(() => String, { nullable: true })
  sprintId?: string;

  @Field(() => String, { nullable: true })
  boardId?: string;

  @Field(() => Number, { nullable: true })
  newBoardRowIndex?: number;

  @Field(() => Number, { nullable: true })
  newSprintRowIndex?: number;

  @Field(() => TaskBasicOption, { nullable: true })
  options?: TaskBasicOption;
}

export default TaskUpdateInput;
