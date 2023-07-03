import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesController } from './controllers/quizzes.controller';
import { QuizzesService } from './services/quizzes.service';
import { AddressesService } from './services/addresses.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { Address } from './entities/address.entity';
import { AddressesController } from './controllers/addresses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option, Address])],
  controllers: [QuizzesController, AddressesController],
  providers: [QuizzesService, AddressesService],
})
export class QuizzesModule {}
