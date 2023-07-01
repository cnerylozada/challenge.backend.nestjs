import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesController } from './controllers/quizzes/quizzes.controller';
import { QuizzesService } from './services/quizzes.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
