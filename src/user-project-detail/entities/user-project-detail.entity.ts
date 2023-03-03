import { IsString, IsNotEmpty } from 'class-validator';

export class UserProjectDetail {
  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsNotEmpty()
  @IsString()
  profileType: string;

  @IsNotEmpty()
  @IsString()
  responsibility: string;

  @IsNotEmpty()
  @IsString()
  environment: string;
}
