import { Field, InputType } from "type-graphql";

@InputType()
export default class UserUpdateOptions {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;
}
