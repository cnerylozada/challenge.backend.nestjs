import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';
import { Option } from '../entities/option.entity';
import { CreateQuizDto } from '../dto/Quiz';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz) private quizzesRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
    @InjectRepository(Option)
    private optionsRepository: Repository<Option>,
  ) {}

  getQuizById(quizId: number) {
    return this.quizzesRepository
      .createQueryBuilder('quizesTable')
      .leftJoinAndSelect('quizesTable.questions', 'questionsTable')
      .leftJoinAndSelect('questionsTable.options', 'optionsTable')
      .where('quizesTable.id = :quizId', { quizId })
      .getOne();
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
