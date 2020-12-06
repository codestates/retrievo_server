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

  @Field(() => String)
  @Column({ name: "root_task_id", nullable: true })
  rootTaskId?: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => Number)
  @Column({ name: "board_row_index", default: 0 })
  boardRowIndex!: number;

  @Field(() => Number)
  @Column({ name: "sprint_row_index", default: 0 })
  sprintRowIndex!: number;

  @Field(() => Boolean)
  @Column({ default: false })
  completed!: boolean;

  @Field(() => String)
  @Column({ type: "timestamp", name: "start_date" })
  startDate: Date;

  @Field(() => String)
  @Column({ type: "timestamp", name: "end_date" })
  endDate: Date;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Field(() => [Comment])
  @OneToMany(() => Comment, (comment) => comment.task)
  comment?: Comment[];

  @Field(() => [File])
  @OneToMany(() => File, (file) => file.task)
  file?: File[];

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.task
  )
  commentNotification?: CommentNotification[];

  @OneToMany(
    () => TaskNotification,
    (taskNotification) => taskNotification.task
  )
  taskNotification?: TaskNotification[];

  @ManyToOne(() => Sprint, (sprint) => sprint.task, { onDelete: "CASCADE" })
  @Field(() => Sprint)
  @JoinColumn({ name: "sprint_id" })
  sprint?: Sprint;

  @ManyToOne(() => Board, (board) => board.task, { onDelete: "SET NULL" })
  @Field(() => Board)
  @JoinColumn({ name: "board_id" })
  board!: Board;

  @ManyToOne(() => Project, (project) => project.task, { onDelete: "SET NULL" })
  @Field(() => Project)
  @JoinColumn({ name: "project_id" })
  project!: Project;

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  @Field(() => [UserTask], { nullable: true })
  userTask?: UserTask[];

  @OneToMany(() => TaskLabel, (taskLabel) => taskLabel.task)
  @Field(() => [TaskLabel], { nullable: true })
  taskLabel?: TaskLabel[];
}
