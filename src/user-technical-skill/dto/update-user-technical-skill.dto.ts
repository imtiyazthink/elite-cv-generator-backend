import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTechnicalSkillDto } from './create-user-technical-skill.dto';

export class UpdateUserTechnicalSkillDto extends PartialType(CreateUserTechnicalSkillDto) {}
