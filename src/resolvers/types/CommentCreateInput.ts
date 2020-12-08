import { InputType, Field } from "type-graphql";

@InputType()
export class CommentCreateInput {
  @Field()
  content!: string;

  @Field({ nullable: true })
  rootCommentId?: string;
}

export default CommentCreateInput;
