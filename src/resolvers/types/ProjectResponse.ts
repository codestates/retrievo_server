import { ObjectType, Field, Int } from "type-graphql";
import { FieldError } from "./UserResponse";
import Project from "../../entities/Project";
import ProjectPermission from "../../entities/ProjectPermission";
import UserTask from "../../entities/UserTask";
@ObjectType()
export class TaskSummary {
  @Field(() => Int, { nullable: true })
  totalTasksCount?: number;

  @Field(() => Int, { nullable: true })
  completedTasksCount?: number;

  @Field(() => Int, { nullable: true })
  incompleteTasksCount?: number;

  @Field(() => Int, { nullable: true })
  overdueTasksCount?: number;

  @Field(() => UserTask, { nullable: true })
  completedTasks?: UserTask[];

  @Field(() => UserTask, { nullable: true })
  incompletedTasks?: UserTask[];

  @Field(() => UserTask, { nullable: true })
  overdueTasks?: UserTask[];
}

@ObjectType()
export class TasksByAssignee extends TaskSummary {
  @Field(() => String, { nullable: true })
  userId: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String, { nullable: true })
  avatar: string;
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

  // @Field(() => IncompleteTasksByStatusSummary, { nullable: true })
  // incompleteTasksByStatusSummary?: IncompleteTasksByStatusSummary;
}
@ObjectType()
export class ProjectPermissionReturnType extends ProjectReturnType {
  @Field(() => ProjectPermission, { nullable: true })
  projectPermission?: ProjectPermission;
}

@ObjectType()
export class ReportSummaryType {
  @Field(() => TaskSummary, { nullable: true })
  taskCountSummary?: TaskSummary;

  @Field(() => [TasksByAssignee], { nullable: true })
  tasksByAssignee?: TasksByAssignee[];

  // @Field()
  // incompleteTaskStatus?: hello[];

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  // @Field(() => IncompleteTasksByStatusSummary, { nullable: true })
  // incompleteTasksByStatusSummary?: IncompleteTasksByStatusSummary;
}

export default ProjectReturnType;
