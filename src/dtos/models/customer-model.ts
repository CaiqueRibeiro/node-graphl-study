import { IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
  @IsString()
  @Field()
  name: string;
}