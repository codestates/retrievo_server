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
} from "typeorm";
import SocialLogin from "./Social_logins";

enum roleTypes {
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
  // 의심이 간다면 여길 먼저 수정
  @OneToOne(() => SocialLogin, (socialLogin) => socialLogin.id, {
    // Join table
    onDelete: "CASCADE",
    nullable: true,
  })
  @JoinColumn({ name: "socialLogin_id" }) // 상대편의 id 참조.
  socialLogin: SocialLogin;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar: string;

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
}

// user에서 검색이 가능해야 함 -> field에 있어야 함
// user가 생성되면 자동으로 social login의 row도 생성되고 userId는 user id여야 함
// 그럼 user에 있는 field는 social login의 id를 받아와야 하는건데..
// user가 삭제되면 social login도 삭제되어야 함
//
