import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";
import Project from "./Project";

@ObjectType()
@Entity()
export default class ProjectPermission extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ name: "is_admin" })
  isAdmin: boolean;

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "project_id" })
  project!: Project;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
}

// class Animal {
//   public name: string;

//   public constructor(theName: string) {
//     this.name = theName;
//   }

//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

/*
// -------------------------- User.ts ----------------------------- //
import { ObjectType, Field } from 'type-graphql';
import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, OneToMany} from 'typeorm'
import { Post } from './Post';

@ObjectType()
@Entity() // Without ObjectType, Field Decorators => it's just a mikro-orm entity
export class User extends BaseEntity{

  @Field() // typeGraphQL 
  @PrimaryGeneratedColumn() // typeOrm
  id!: number;

  @Field() // typeGraphQL 
  @Column({unique:true}) // typeOrm
  username!: string;

  @Field() // typeGraphQL 
  @Column({unique:true}) // typeOrm
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Post, post => post.creator)
  posts: Post[];

  @Field(() => String) // typeGraphQL 
  @CreateDateColumn() // typeOrm
  createdAt: Date;

  @Field(() => String) // typeGraphQL 
  @UpdateDateColumn() // typeOrm
  updatedAt: Date;
}

// -------------------------- Post.ts ----------------------------- // 
import { ObjectType, Field } from 'type-graphql';
import {Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { User } from './User';

@ObjectType()
@Entity() // Without ObjectType, Field Decorators => it's just a mikro-orm entity
export class Post extends BaseEntity {

  @Field() // typeGraphQL 
  @PrimaryGeneratedColumn() // typeOrm
  id!: number;

  @Field() // typeGraphQL 
  @Column() // typeOrm
  title!: string;

  @Field() // typeGraphQL 
  @Column() // typeOrm
  text!: string;

  @Field() // typeGraphQL 
  @Column({ type: "int", default: 0 }) // typeOrm
  points!: number;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => User, user => user.posts)
  creator: User;

  @Field(() => String) // typeGraphQL 
  @CreateDateColumn() // typeOrm
  createdAt: Date;

  @Field(() => String) // typeGraphQL 
  @UpdateDateColumn() // typeOrm
  updatedAt: Date;
}


*/
