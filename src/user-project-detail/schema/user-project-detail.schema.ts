import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserProjectDetailDocument = UserProjectDetail & Document;

@Schema({ timestamps: true })
export class UserProjectDetail {
  @Prop()
  projectName: string;

  @Prop()
  profileType: string;

  @Prop()
  responsibility: string;

  @Prop()
  environment: string;

  @Prop()
  creator: mongoose.Types.ObjectId;
}

export const UserProjectDetailSchema =
  SchemaFactory.createForClass(UserProjectDetail);
