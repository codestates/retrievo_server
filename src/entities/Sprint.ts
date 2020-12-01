import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Action from "./Action";
import Project from "./Project";
import Board from "./Board";
import Task from "./Task";

@ObjectType()
@Entity()
export default class Sprint extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  title!: string;

  @Field({ nullable: true })
  @Column()
  description?: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ name: "did_start", default: false })
  didStart: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ name: "is_completed", default: false })
  isCompleted: boolean;

  @Field(() => Number)
  @Column({ name: "board_row" })
  boardRow: number;

  @Field(() => String, { nullable: true })
  @Column({ type: "timestamp", name: "due_date" })
  dueDate?: Date;

  @Field(() => String, { nullable: true })
  @Column({ type: "timestamp", name: "started_at" })
  startedAt?: Date;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Project, (project) => project.sprint)
  @Field(() => Project)
  @JoinColumn({ name: "project_id" })
  project!: Project;

  @OneToMany(() => Action, (action) => action.project)
  action?: Action[];

  @OneToMany(() => Task, (task) => task.sprint)
  task?: Task;

  @OneToMany(() => Board, (board) => board.sprint)
  board?: Board[];
}
