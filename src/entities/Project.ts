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
import Action from "./Action";
import ProjectPermission from "./ProjectPermission";
import Sprint from "./Sprint";
import Label from "./Label";
import Board from "./Board";

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
  @Column()
  logo: string;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(
    () => ProjectPermission,
    (projectPermission) => projectPermission.id
  )
  projectPermissions?: ProjectPermission[];

  @OneToMany(() => Action, (action) => action.project)
  action?: Action[];

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  sprint?: Sprint[];

  @OneToMany(() => Board, (board) => board.project)
  board?: Board[];

  @OneToMany(() => Label, (label) => label.project)
  label?: Label[];
}
