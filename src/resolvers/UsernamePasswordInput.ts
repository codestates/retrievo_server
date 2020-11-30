import { InputType, Field } from "type-graphql";
// test
@InputType()
export class UsernamePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}

export default UsernamePasswordInput;
