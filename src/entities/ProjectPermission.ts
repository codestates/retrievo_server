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
  @ManyToOne(() => Project, (project) => project.projectPermissions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "project_id" })
  project!: Project | string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.projectPermissions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user!: User; // NOTE: type을 string으로 지정해야 할 수도 있음(user.id인 경우)
}
