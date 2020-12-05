import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import ProjectPermission from "./ProjectPermission";
import Sprint from "./Sprint";
import Label from "./Label";
import Board from "./Board";
import SprintNotification from "./SprintNotification";
import CommentNotification from "./CommentNotification";
import TaskNotification from "./TaskNotification";

@ObjectType()
@Entity()
export default class Project extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ nullable: true })
  logo?: string;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Field(() => [ProjectPermission], { nullable: true })
  @OneToMany(
    () => ProjectPermission,
    (projectPermission) => projectPermission.project
  )
  projectPermissions?: ProjectPermission[];

  @OneToMany(
    () => TaskNotification,
    (taskNotification) => taskNotification.project
  )
  taskNotification?: TaskNotification[];

  @OneToMany(
    () => SprintNotification,
    (sprintNotification) => sprintNotification.project
  )
  sprintNotification?: SprintNotification[];

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.project
  )
  commentNotification?: CommentNotification[];

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  sprint?: Sprint[];

  @OneToMany(() => Board, (board) => board.project)
  board?: Board[];

  @OneToMany(() => Label, (label) => label.project)
  label?: Label[];
}
