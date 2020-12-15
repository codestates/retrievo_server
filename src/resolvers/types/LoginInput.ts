import { InputType, Field } from "type-graphql";
// test
@InputType()
export class LoginInput {
  @Field()
  password: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  projectId?: string;
}
export default LoginInput;
