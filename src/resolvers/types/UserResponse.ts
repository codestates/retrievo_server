import { Field, ObjectType } from "type-graphql";
import { ApolloError } from "apollo-server-express";
import User from "../../entities/User";

@ObjectType()
export class UserResponse {
  @Field(() => [ApolloError], { nullable: true })
  errors?: ApolloError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

export default UserResponse;
