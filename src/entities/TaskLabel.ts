import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Task from "./Task";
import Label from "./Label";

@ObjectType()
@Entity()
export default class TaskLabel extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Task)
  @ManyToOne(() => Task, (task) => task.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "task_id" })
  task!: Task;

  @Field(() => Label)
  @ManyToOne(() => Label, (label) => label.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "label_id" })
  label!: Label;
}
