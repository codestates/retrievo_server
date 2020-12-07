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
import Task from "./Task";
import Project from "./Project";
import TaskNotification from "./TaskNotification";

@ObjectType()
@Entity()
export default class Board extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column()
  title!: string;

  @ManyToOne(() => Project, (project) => project.board, {
    onDelete: "CASCADE",
  })
  @Field(() => Project)
  @JoinColumn({ name: "project_id" })
  project: Project;

  @Field(() => Number)
  @Column({ name: "board_column_index", default: 0 })
  boardColumnIndex!: number;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (task) => task.board, { nullable: true })
  task: Task[] | null;

  @OneToMany(
    () => TaskNotification,
    (taskNotificaiton) => taskNotificaiton.status,
    { nullable: true }
  )
  taskNotification: TaskNotification[];
}
