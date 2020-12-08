import { ObjectType, Field, Int } from "type-graphql";
import { FieldError } from "./UserResponse";
import Project from "../../entities/Project";
import ProjectPermission from "../../entities/ProjectPermission";

@ObjectType()
export class TaskSummary {
  @Field(() => Int, { nullable: true })
  totalTasksCount!: number;

  @Field(() => Int, { nullable: true })
  completedTasksCount!: number;

  @Field(() => Int, { nullable: true })
  incompleteTasksCount!: number;

  @Field(() => Int, { nullable: true })
  overdueTasksCount!: number;
}

export class IncompleteTasksByStatusSummary {
  @Field(() => Int, { nullable: true })
  totalTasksCount!: number;

  @Field(() => Int, { nullable: true })
  completedTasksCount!: number;

  @Field(() => Int, { nullable: true })
  incompleteTasksCount!: number;

  @Field(() => Int, { nullable: true })
  overdueTasksCount!: number;
}

@ObjectType()
export class ProjectReturnType {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => Project, { nullable: true })
  project?: Project;

  @Field(() => Project, { nullable: true })
  projects?: Project[];

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => TaskSummary, { nullable: true })
  taskSummary?: TaskSummary;

  // @Field(() => IncompleteTasksByStatusSummary, { nullable: true })
  // incompleteTasksByStatusSummary?: IncompleteTasksByStatusSummary;
}
@ObjectType()
export class ProjectPermissionReturnType extends ProjectReturnType {
  @Field(() => ProjectPermission, { nullable: true })
  projectPermission?: ProjectPermission;
}

export default ProjectReturnType;
