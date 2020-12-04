import { Field, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
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

  // owner의 OneToOne은 관계성을 지정함
  // 이제 확실해졌음 지워질 놈이 cascade 설정해야함
  @OneToOne(() => SocialLogin, (socialLogin) => socialLogin.user)
  @JoinColumn({ name: "socialLogin_id" }) // 상대편의 id 참조.
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
