import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProjectDetailDto } from './create-user-project-detail.dto';

export class UpdateUserProjectDetailDto extends PartialType(CreateUserProjectDetailDto) {}
