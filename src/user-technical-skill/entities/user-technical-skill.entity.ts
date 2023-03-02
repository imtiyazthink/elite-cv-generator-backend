import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserTechnicalSkill {
  @IsNotEmpty()
  @IsString()
  languages: string;

  @IsNotEmpty()
  @IsString()
  technologies: string;

  @IsNotEmpty()
  @IsString()
  frameworks: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  developmentTools: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  orm: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  webSeries: string;

  @IsNotEmpty()
  @IsString()
  database: string;
}
