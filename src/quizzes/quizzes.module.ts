import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizzesController } from './controllers/quizzes/quizzes.controller';
import { QuizzesService } from './services/quizzes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
