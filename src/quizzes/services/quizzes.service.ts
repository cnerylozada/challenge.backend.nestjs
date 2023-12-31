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
  ) {}

  getQuizById(quizId: number) {
    return this.quizzesRepository
      .createQueryBuilder('quizesTable')
      .leftJoinAndSelect('quizesTable.questions', 'questionsTable')
      .leftJoinAndSelect('questionsTable.options', 'optionsTable')
      .where('quizesTable.id = :quizId', { quizId })
      .getOne();
  }

  async getAvailableQuizzes() {
    const allQuizzess = await this.quizzesRepository.find();
    return allQuizzess.map((_) => _.id);
  }

  async saveQuiz(quizDto: CreateQuizDto) {
    const questions: Question[] = [];
    quizDto.questions.forEach((question) => {
      const newQuestion = new Question();
      newQuestion.text = question.text;
      newQuestion.imageUrl = question.imageUrl;
      newQuestion.lifetimeSeconds = question.lifetimeSeconds;

      const options: Option[] = [];
      question.options.forEach((option) => {
        const newOption = new Option();
        newOption.text = option.text;
        options.push(newOption);
      });
      newQuestion.options = options;
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
