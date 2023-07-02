import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { QuizzesModule } from './quizzes/quizzes.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), QuizzesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
