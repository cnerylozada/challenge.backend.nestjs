import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST || '34.136.252.69',
  port: Number(process.env.POSTGRESQL_PORT) || 5432,
  username: process.env.POSTGRESQL_USER || 'postgres',
  password: process.env.POSTGRESQL_PASSWORD || '123456',
  database: process.env.POSTGRESQL_DB || 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
