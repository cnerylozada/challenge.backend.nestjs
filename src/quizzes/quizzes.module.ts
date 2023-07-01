import { Module } from '@nestjs/common';
import { QuizzesController } from './controllers/quizzes/quizzes.controller';

@Module({
  controllers: [QuizzesController],
})
export class QuizzesModule {}
