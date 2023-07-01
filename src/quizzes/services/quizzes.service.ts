import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/Quiz';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz) private quizzesRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  getQuizById(quizId: number) {
    return 'xxx';
  }

  async saveQuiz(quizDto: CreateQuizDto) {
    const questions: Question[] = [];
    quizDto.questions.forEach((_) => {
      const newQuestion = new Question();
      newQuestion.text = _.text;
      newQuestion.imageUrl = _.imageUrl;
      newQuestion.lifetimeSeconds = _.lifetimeSeconds;
      questions.push(newQuestion);
    });
    await this.questionsRepository.save(questions);

    const quiz = new Quiz();
    quiz.title = quizDto.title;
    quiz.imageUrl = quizDto.imageUrl;
    quiz.questions = questions;
    return this.quizzesRepository.save(quiz);
  }
}
