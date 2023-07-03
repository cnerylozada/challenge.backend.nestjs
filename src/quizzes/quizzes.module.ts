import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesController } from './controllers/quizzes.controller';
import { QuizzesService } from './services/quizzes.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { AddressesController } from './controllers/addresses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  controllers: [QuizzesController, AddressesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
