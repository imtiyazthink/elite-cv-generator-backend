import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserProjectInfoDocument = UserProjectInfo & Document;

@Schema({ timestamps: true })
export class UserProjectInfo {
  @Prop()
  projectName: string;

  @Prop()
  domain: string;

  @Prop()
  clientName: string;

  @Prop()
  description: string;

  @Prop()
  creator: mongoose.Types.ObjectId;
}

export const UserProjectInfoSchema =
  SchemaFactory.createForClass(UserProjectInfo);
