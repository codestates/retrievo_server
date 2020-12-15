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

  @Field({ nullable: true })
  projectId?: string;
}
export default UsernamePasswordInput;
