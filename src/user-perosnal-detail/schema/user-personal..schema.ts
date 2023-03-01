import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPersonDetailDocument = UserPersonDetail & Document;

@Schema({ timestamps: true })
export class UserPersonDetail {
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

export const UserPersonDetailSchema =
  SchemaFactory.createForClass(UserPersonDetail);
