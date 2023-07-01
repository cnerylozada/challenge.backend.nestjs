import { Controller, Get, Param } from '@nestjs/common';
import { QuizzesService } from 'src/quizzes/services/quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private quizzesService: QuizzesService) {}

  @Get(':quizId')
  getQuizById(@Param('quizId') quizId: number) {
    return this.quizzesService.getQuizById(quizId);
  }
}
