import { InputType, Field } from "type-graphql";

@InputType()
export class LoginInput {
  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  projectId?: string;
}

export default LoginInput;
