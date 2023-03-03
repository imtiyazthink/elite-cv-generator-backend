import { Module } from '@nestjs/common';
import { UserTechnicalSkillService } from './user-technical-skill.service';
import { UserTechnicalSkillController } from './user-technical-skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTechnicalSkill } from './entities/user-technical-skill.entity';
import { UserTechnicalSkillSchema } from './schema/user-technical.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserTechnicalSkill.name,
        schema: UserTechnicalSkillSchema,
      },
    ]),
  ],
  controllers: [UserTechnicalSkillController],
  providers: [UserTechnicalSkillService],
})
export class UserTechnicalSkillModule {}
