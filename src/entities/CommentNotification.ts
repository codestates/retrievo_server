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
} from "typeorm";
import User from "./User";
import Project from "./Project";
import Task from "./Task";
import Comment from "./Comment";

// comment_notification
// - id
// - project_id
// - target_id
// - is_read
// -- comment_id
// -- task_id
// -- author_id

@ObjectType()
@Entity()
export default class CommentNotification extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Project, { nullable: true })
  @ManyToOne(() => Project, (project) => project.commentNotification)
  @JoinColumn({ name: "project_id" })
  project?: Project;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.commentAuthor)
  @JoinColumn({ name: "author_id" })
  author?: User;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.commentTarget)
  @JoinColumn({ name: "target_id" })
  target?: User;

  @Field(() => Boolean)
  @Column({ default: false, name: "is_read" })
  isRead: boolean;

  @Field(() => Comment, { nullable: true })
  @ManyToOne(() => Comment, (comment: Comment) => comment.commentNotification)
  @JoinColumn({ name: "comment_id" })
  comment?: Comment;

  @Field(() => Task, { nullable: true })
  @ManyToOne(() => Task, (task: Task) => task.commentNotification)
  @JoinColumn({ name: "task_id" })
  task?: Task;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
