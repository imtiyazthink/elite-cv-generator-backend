import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProjectInfoDto } from './create-user-project-info.dto';

export class UpdateUserProjectInfoDto extends PartialType(CreateUserProjectInfoDto) {}
