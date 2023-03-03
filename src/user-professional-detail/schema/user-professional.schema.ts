import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserProfessionalDetailDocument = UserProfessionalDetail & Document;

@Schema({ timestamps: true })
export class UserProfessionalDetail {
  @Prop()
  yearsOfExperience: number;

  @Prop()
  profileType: string;

  @Prop()
  summary: string;

  @Prop()
  creator: mongoose.Types.ObjectId;
}

export const UserProfessionalDetailSchema = SchemaFactory.createForClass(
  UserProfessionalDetail,
);
