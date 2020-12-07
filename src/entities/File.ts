import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Task from "./Task";

@ObjectType()
@Entity()
export default class File extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column({ name: "file_link" })
  fileLink!: string;

  @ManyToOne(() => Task, (task) => task.file, { onDelete: "CASCADE" })
  @Field(() => Task)
  @JoinColumn({ name: "task_id" })
  task!: string;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
