import { InputType, Field } from "type-graphql";
import Board from "../../entities/Board";
import Sprint from "../../entities/Sprint";
import UserTask from "../../entities/UserTask";
import TaskLabel from "../../entities/TaskLabel";

@InputType()
export class TaskUpdateInput {
  @Field(() => String)
  rootTaskId?: string;

  @Field()
  title?: string;

  @Field()
  description?: string;

  @Field(() => Boolean, { defaultValue: false })
  completed?: boolean;

  @Field(() => String)
  startDate?: Date;

  @Field(() => String)
  endDate?: Date;

  @Field(() => Number)
  boardRowIndex?: number;

  @Field(() => Number)
  sprintRowIndex?: number;

  @Field(() => [File])
  file?: File[];

  @Field(() => Sprint)
  sprint?: Sprint;

  @Field(() => Board)
  board?: Board;

  @Field(() => [UserTask], { nullable: true })
  userTask?: UserTask[];

  @Field(() => [TaskLabel], { nullable: true })
  taskLabel?: TaskLabel[];
}

export default TaskUpdateInput;
