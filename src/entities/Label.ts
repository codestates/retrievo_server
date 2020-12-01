import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import Task from "./Task";
import Project from "./Project";

@ObjectType()
@Entity()
export default class Label extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  color!: string;

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.label)
  @JoinColumn({ name: "project_id" })
  project!: Project;

  @ManyToMany(() => Task)
  @Field(() => Task)
  @JoinTable({ name: "task_label" })
  task?: Task[];
}
