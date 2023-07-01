import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '35.223.120.48',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
