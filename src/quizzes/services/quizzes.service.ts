import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizzesService {
  getQuizById(quizId: number) {
    return 'xxx';
  }
}
