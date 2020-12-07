import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";
import Project from "./Project";

@ObjectType()
@Entity()
export default class ProjectPermission extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ name: "is_admin" })
  isAdmin: boolean;

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "project_id" })
  project!: Project | string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User | string;
}
