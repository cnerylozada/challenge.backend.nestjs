import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { QuizzesModule } from './quizzes/quizzes.module';

console.log(
  process.env.POSTGRESQL_HOST,
  process.env.POSTGRESQL_PORT,
  process.env.POSTGRESQL_USER,
  process.env.POSTGRESQL_PASSWORD,
  process.env.POSTGRESQL_DB,
);
@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), QuizzesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
