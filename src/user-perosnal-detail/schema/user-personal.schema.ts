import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPersonalDetailDocument = UserPersonalDetail & Document;

@Schema({ timestamps: true })
export class UserPersonalDetail {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  gender: string;

  @Prop()
  email: string;

  @Prop()
  contact: string;

  @Prop()
  dob: string;
}

export const UserPersonalDetailSchema =
  SchemaFactory.createForClass(UserPersonalDetail);
