import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import User from "./User";
import Task from "./Task";

@ObjectType()
@Entity()
export default class UserTask extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Task)
  @ManyToOne(() => Task, (task) => task.userTask, { onDelete: "CASCADE" })
  @JoinColumn({ name: "task_id" })
  task!: Task;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userTask, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
}
