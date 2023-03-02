import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserProfessionalDetail {
  @IsNotEmpty()
  @IsInt()
  yearsOfExperience: number;

  @IsNotEmpty()
  @IsString()
  profileType: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  summary: string;
}
