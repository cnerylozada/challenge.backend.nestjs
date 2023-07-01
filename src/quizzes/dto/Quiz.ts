import { CreateQuestionDto } from './Question';

export class CreateQuizDto {
  title: string;
  imageUrl: string;

  questions: CreateQuestionDto[];
}
