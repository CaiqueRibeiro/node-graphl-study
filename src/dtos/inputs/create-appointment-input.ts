import { IsDate, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @IsString()
  @Field()
  customerId: string;

  @IsDate()
  @Field()
  startsAt: Date;

  @IsDate()
  @Field()
  endsAt: Date;
}