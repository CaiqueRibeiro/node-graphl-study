import { IsDate } from "class-validator";
import { Field, ObjectType } from "type-graphql";

// Models in GraphQL will have only fields that are relevant to appear in request

@ObjectType()
export class Appointment {
  @IsDate()
  @Field()
  startsAt: Date;

  @IsDate()
  @Field()
  endsAt: Date;
}