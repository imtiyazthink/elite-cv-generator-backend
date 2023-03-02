import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfessionalDetailDto } from './create-user-professional-detail.dto';

export class UpdateUserProfessionalDetailDto extends PartialType(CreateUserProfessionalDetailDto) {}
