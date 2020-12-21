import { Field, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  // JoinColumn,
} from "typeorm";
import User from "./User";

export enum socialProviderType {
  GOOGLE = "google",
  GITHUB = "github",
}

registerEnumType(socialProviderType, {
  name: "socialProviderType",
  valuesConfig: {
    GOOGLE: {
      description: "Google OAuth 2.0",
    },
    GITHUB: {
      description: "Github OAUTH 2.0",
    },
  },
});

@ObjectType()
@Entity()
export default class SocialLogin extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => String)
  @Column({ name: "provider_id" })
  providerId: string;

  @Field(() => socialProviderType)
  @Column({
    name: "social_provider",
    type: "enum",
    enum: socialProviderType,
  })
  socialProvider!: socialProviderType;

  @OneToOne(() => User, (user) => user.socialLogin, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
