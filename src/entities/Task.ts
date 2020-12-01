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
  JoinTable,
  ManyToMany,
} from "typeorm";
import Action from "./Action";
import Sprint from "./Sprint";
import Board from "./Board";
import Comment from "./Comment";
import User from "./User";
import File from "./File";

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

  @OneToMany(() => Action, (action) => action.task)
  action?: Action[];

  @OneToMany(() => Comment, (comment) => comment.task)
  comment?: Comment[];

  @OneToMany(() => File, (file) => file.task)
  file?: File[];

  @ManyToOne(() => Sprint, (sprint) => sprint.task)
  @Field(() => Sprint, { nullable: true })
  @JoinColumn({ name: "sprint_id" })
  sprint?: Sprint;

  @ManyToOne(() => Board, (board) => board.task)
  @Field(() => String)
  @JoinColumn({ name: "board_id" })
  board!: Board;

  @ManyToMany(() => User)
  @Field(() => User)
  @JoinTable({ name: "user_task" })
  user?: User[];
}

// task sprintindex & boardindex;
// 1. 프로젝트 정보를 불러온다
// 2-A. 모든 보드를 불러온다
// 2-B. did_Start: true 스프린트를 불러온다
//     -> + 스프린트의 모든 태스크를 불러온다.
//     -> + 태스크의 모든 라벨&AssignedUser을 같이 불러온다.
