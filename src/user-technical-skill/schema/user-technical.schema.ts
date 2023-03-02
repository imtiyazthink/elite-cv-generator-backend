import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserTechnicalSkillDocument = UserTechnicalSkill & Document;

@Schema({ timestamps: true })
export class UserTechnicalSkill {
  @Prop()
  languages: string;

  @Prop()
  technologies: string;

  @Prop()
  frameworks: string;

  @Prop()
  developmentTools: string;

  @Prop()
  orm: string;

  @Prop()
  webSeries: string;

  @Prop()
  database: string;
}

export const UserTechnicalSkillSchema =
  SchemaFactory.createForClass(UserTechnicalSkill);
