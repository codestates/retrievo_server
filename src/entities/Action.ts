import { Field, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";
import Project from "./Project";
import Task from "./Task";
import Sprint from "./Sprint";
import Comment from "./Comment";

export enum actionType {
  TASK_ASSIGNMENT = "task_assignment",
  // 나에게 task title이 할당되었습니다 href="task_id"
  TASK_STATUS_CHANGE = "task_status_change",
  // task title의 상태가 00으로 변경되었습니다. href="task_id"
  COMMENT_NEW = "comment_new",
  // initiator님이 comment를 남기셨습니다 href="task_id"
  SPRINT_START = "sprint_start",
  // 'sprint name'이 시작되었습니다 href="board"
  SPRINT_END = "sprint_end",
  // 'sprint name'이 종료되었습니다 href="sprint"
}

registerEnumType(actionType, {
  name: "description",
  valuesConfig: {
    TASK_ASSIGNMENT: {
      description: "action for NEW task assignment",
    },
    TASK_STATUS_CHANGE: {
      description: "action for task status CHANGE",
    },
    COMMENT_NEW: {
      description: "action for NEW comment",
    },
    SPRINT_START: {
      description: "action for sprint START",
    },
    SPRINT_END: {
      description: "action for sprint END",
    },
  },
});

@ObjectType()
@Entity()
export default class Action extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => actionType)
  @Column({
    type: "enum",
    enum: actionType,
  })
  description: actionType;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.inititor)
  @JoinColumn({ name: "initiator_id" })
  initiator?: User;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.target)
  @JoinColumn({ name: "target_id" })
  target?: User;

  @Field(() => Project, { nullable: true })
  @ManyToOne(() => Project, (project) => project.action)
  @JoinColumn({ name: "project_id" })
  project?: Project;

  @Field(() => Task, { nullable: true })
  @ManyToOne(() => Task, (task: Task) => task.action)
  @JoinColumn({ name: "task_id" })
  task?: Task;

  @Field(() => Sprint, { nullable: true })
  @ManyToOne(() => Sprint, (sprint: Sprint) => sprint.action)
  @JoinColumn({ name: "sprint_id" })
  sprint?: Sprint;

  @Field(() => Comment, { nullable: true })
  @ManyToOne(() => Comment, (comment: Comment) => comment.action)
  @JoinColumn({ name: "comment_id" })
  comment?: Comment;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
