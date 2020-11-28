import { Field, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

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
      description: "데모 버전 - to be deprecated",
    },
    ADMIN: {
      description: "사내 관리자용",
    },
  },
});

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column({ unique: true })
  username!: string;

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
