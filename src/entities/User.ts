import { Field, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import SocialLogin from "./SocialLogins";
import ProjectPermission from "./ProjectPermission";
import Comment from "./Comment";
import UserTask from "./UserTask";
import SprintNotification from "./SprintNotification";
import CommentNotification from "./CommentNotification";
import TaskNotification from "./TaskNotification";

export enum roleTypes {
  MEMBER = "member",
  GUEST = "guest",
  ADMIN = "admin",
}

registerEnumType(roleTypes, {
  name: "roleTypes",
  valuesConfig: {
    MEMBER: {
      description: "일반 회원",
    },
    GUEST: {
      description: "데모 버전 - to be dep recated",
    },
    ADMIN: {
      description: "사내 관리자용",
    },
  },
});

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  username!: string;

  @OneToOne(() => SocialLogin, (socialLogin) => socialLogin.user)
  socialLogin?: SocialLogin;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field(() => roleTypes, { defaultValue: "member" })
  @Column({
    type: "enum",
    enum: roleTypes,
    default: roleTypes.MEMBER,
  })
  role!: roleTypes;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Field(() => [ProjectPermission])
  @OneToMany(
    () => ProjectPermission,
    (projectPermission) => projectPermission.user
  )
  projectPermissions?: ProjectPermission[];

  @OneToMany(
    () => SprintNotification,
    (sprintNotification) => sprintNotification.target
  )
  sprintTarget?: SprintNotification[];

  @OneToMany(
    () => SprintNotification,
    (sprintNotification) => sprintNotification.target
  )
  taskTarget?: TaskNotification[];

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.author
  )
  commentAuthor?: CommentNotification[];

  @OneToMany(
    () => CommentNotification,
    (commentNotification) => commentNotification.target
  )
  commentTarget?: CommentNotification[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comment?: Comment[];

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTask!: UserTask[];
}
