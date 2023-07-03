import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  address: string;

  @IsString()
  lastTime: string;
}
