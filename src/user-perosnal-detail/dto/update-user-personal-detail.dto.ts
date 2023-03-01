import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPersonalDetailDto } from './create-user-perosnal-detail.dto';

export class UpdateUserPersonalDetailDto extends PartialType(
  CreateUserPersonalDetailDto,
) {}
