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
import Sprint from "./Sprint";

@ObjectType()
@Entity()
export default class Board extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  title!: string;

  @ManyToOne(() => Sprint, (sprint) => sprint.id)
  @Field(() => Sprint)
  @JoinColumn({ name: "sprint_id" })
  sprint: Sprint;

  @Field(() => Number)
  @Column({ name: "board_column_index", default: 0 })
  boardColumnIndex!: number;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Task, (task) => task.board)
  task: Task[];
}
