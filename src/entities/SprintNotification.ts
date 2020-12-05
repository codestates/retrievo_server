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
import Sprint from "./Sprint";

export enum sprintNotificationType {
  SPRINT_START = "sprint_start",
  // 'sprint name'이 시작되었습니다 href="board"
  SPRINT_END = "sprint_end",
  // 'sprint name'이 종료되었습니다 href="sprint"
}

registerEnumType(sprintNotificationType, {
  name: "description",
  valuesConfig: {
    SPRINT_START: {
      description: "notification for sprint START",
    },
    SPRINT_END: {
      description: "notification for sprint END",
    },
  },
});

// sprint_notifiaction
// - id
// - project_id
// - target_id
// - is_read
// -- sprint_id
// -- type [start, end]

@ObjectType()
@Entity()
export default class SprintNotification extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => sprintNotificationType)
  @Column({
    type: "enum",
    enum: sprintNotificationType,
  })
  type: sprintNotificationType;

  @Field(() => Boolean)
  @Column({ default: false, name: "is_read" })
  isRead: boolean;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.sprintTarget, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "target_id" })
  target?: User;

  @Field(() => Project, { nullable: true })
  @ManyToOne(() => Project, (project) => project.sprintNotification)
  @JoinColumn({ name: "project_id" })
  project?: Project;

  @Field(() => Sprint, { nullable: true })
  @ManyToOne(() => Sprint, (sprint: Sprint) => sprint.sprintNotification)
  @JoinColumn({ name: "sprint_id" })
  sprint?: Sprint;

  @Field(() => String)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
