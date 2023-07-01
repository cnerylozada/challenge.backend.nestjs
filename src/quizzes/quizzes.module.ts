import { Module } from '@nestjs/common';
import { QuizzesController } from './controllers/quizzes/quizzes.controller';
import { QuizzesService } from './services/quizzes.service';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
