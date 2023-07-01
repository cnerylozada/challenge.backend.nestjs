import {
  IsString,
  MinLength,
  IsNumber,
  Min,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOptionDto } from './Optionts';

export class CreateQuestionDto {
  @IsString()
  @MinLength(20)
  text: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  @Min(5)
  lifetimeSeconds: number;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested({ each: true })
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[];
}
