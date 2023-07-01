import {
  IsString,
  MinLength,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateQuestionDto } from './Question';

export class CreateQuizDto {
  @IsString()
  @MinLength(20)
  title: string;

  @IsString()
  imageUrl: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
