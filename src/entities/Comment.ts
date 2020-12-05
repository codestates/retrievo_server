import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Task from "./Task";
import CommentNotification from "./CommentNotification";
import User from "./User";

@ObjectType()
@Entity()
export default class Comment extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column({ name: "root_comment_id" })
  rootCommentId?: string;

  @Field(() => Task)
  @ManyToOne(() => Task, (task) => task.comment, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "task_id" })
  task!: Task;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comment, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.comment
  )
  commentNotification?: CommentNotification[];

  @Field(() => String)
  @Column()
  content!: string;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
