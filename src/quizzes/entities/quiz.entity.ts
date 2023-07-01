import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  imageUrl: string;
}
