import { IsString, MinLength } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @MinLength(10)
  text: string;
}
