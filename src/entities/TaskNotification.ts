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
import Board from "./Board";

// 누군가가 댓글을 달았을때 해당 task assignee에게만 noti
// 특정 사람을 언급했을 때 노티가 감.
// assignee 중에 me가 있다면 제외

export enum taskNotificationType {
  CREATED = "CREATED",
  // 나에게 task title이 할당되었습니다 href="task_id"
  STATUS_CHANGED = "STATUS_CHANGED",
  // task title의 상태가 00으로 변경되었습니다. href="task_id"
}

registerEnumType(taskNotificationType, {
  name: "task_notification_type",
});

@ObjectType()
@Entity()
export default class TaskNotification extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Boolean)
  @Column({ default: false, name: "is_read" })
  isRead: boolean;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.taskTarget, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "target_id" })
  target?: User;

  @Field(() => Board)
  @ManyToOne(() => Board, (board) => board.taskNotification)
  @JoinColumn({ name: "status_id" })
  status: Board;

  @Field(() => taskNotificationType)
  @Column({
    type: "enum",
    enum: taskNotificationType,
  })
  type: taskNotificationType;

  //    */
  // cascade?: boolean | ("insert" | "update" | "remove" | "soft-remove" | "recover")[];
  // /**
  //  * Indicates if relation column value can be nullable or not.
  //  */
  // nullable?: boolean;
  // /**
  //  * Database cascade action on delete.
  //  */
  // // onDelete?: OnDeleteType;
  // = "RESTRICT" | "CASCADE" | "SET NULL" | "DEFAULT" | "NO ACTION"
  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.taskNotification, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "project_id" })
  project: Project;

  @Field(() => Task, { nullable: true })
  @ManyToOne(() => Task, (task: Task) => task.taskNotification)
  @JoinColumn({ name: "task_id" })
  task?: Task;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
