import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizzesService } from 'src/quizzes/services/quizzes.service';
import { CreateQuizDto } from 'src/quizzes/dto/Quiz';

@Controller('quizzes')
export class QuizzesController {
  constructor(private quizzesService: QuizzesService) {}

  @Get('/available-quizzes')
  getAvailableQuizzes() {
    return this.quizzesService.getAvailableQuizzes();
  }

  @Get(':quizId')
  getQuizById(@Param('quizId') quizId: number) {
    return this.quizzesService.getQuizById(quizId);
  }

  @Post()
  saveQuiz(@Body() quiz: CreateQuizDto) {
    return this.quizzesService.saveQuiz(quiz);
  }
}
