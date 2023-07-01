import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz) private quizzesRepository: Repository<Quiz>,
  ) {}
  getQuizById(quizId: number) {
    return 'xxx';
  }
}
