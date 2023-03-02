import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserProjectInfo {
  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsNotEmpty()
  @IsString()
  domain: string;

  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;
}
