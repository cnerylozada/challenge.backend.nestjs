import { CreateOptionDto } from './Optionts';

export class CreateQuestionDto {
  text: string;
  imageUrl: string;
  lifetimeSeconds: number;

  options: CreateOptionDto[];
}
