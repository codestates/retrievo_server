import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Generated,
} from "typeorm";
import Sprint from "./Sprint";
import Board from "./Board";
import Project from "./Project";
import Comment from "./Comment";
import File from "./File";
import UserTask from "./UserTask";
import TaskLabel from "./TaskLabel";
import CommentNotification from "./CommentNotification";
import TaskNotification from "./TaskNotification";

@ObjectType()
@Entity()
export default class Task extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String, { nullable: true })
  @Column({ name: "root_task_id", nullable: true })
  rootTaskId: string;

  @Field()
  @Column()
  title!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, type: "varchar" })
  description: string | null;

  @Field(() => Number)
  @Column({ name: "task_index" })
  @Generated("increment")
  taskIndex: number;

  @Field(() => Number, { nullable: true })
  @Column({
    name: "board_row_index",
    nullable: true,
    type: "integer",
  })
  boardRowIndex: number | null;

  @Field(() => Number)
  @Column({ name: "sprint_row_index", default: 0 })
  sprintRowIndex!: number;

  @Field(() => Boolean)
  @Column({ default: false })
  completed!: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: "timestamp", name: "start_date", nullable: true })
  startDate: Date;

  @Field(() => String, { nullable: true })
  @Column({ type: "timestamp", name: "end_date", nullable: true })
  endDate: Date;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, (comment) => comment.task)
  comment: Comment[] | null;

  @Field(() => [File], { nullable: true })
  @OneToMany(() => File, (file) => file.task)
  file: File[] | null;

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.task
  )
  commentNotification?: CommentNotification[];

  @OneToMany(
    () => TaskNotification,
    (taskNotification) => taskNotification.task,
    { nullable: true }
  )
  taskNotification: TaskNotification[];

  @ManyToOne(() => Sprint, (sprint) => sprint.task, { onDelete: "CASCADE" })
  @Field(() => Sprint)
  @JoinColumn({ name: "sprint_id" })
  sprint!: Sprint;

  @ManyToOne(() => Board, (board) => board.task, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @Field(() => Board, { nullable: true })
  @JoinColumn({ name: "board_id" })
  board: Board | null;

  @ManyToOne(() => Project, (project) => project.task, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @Field(() => Project)
  @JoinColumn({ name: "project_id" })
  project!: Project;

  @Field(() => [UserTask], { nullable: true })
  @OneToMany(() => UserTask, (userTask) => userTask.task, { nullable: true })
  userTask: UserTask[] | null;

  @OneToMany(() => TaskLabel, (taskLabel) => taskLabel.task)
  @Field(() => [TaskLabel], { nullable: true })
  taskLabel: TaskLabel[] | null;
}
