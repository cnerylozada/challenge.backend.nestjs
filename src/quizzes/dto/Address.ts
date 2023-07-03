import { IsString, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  address: string;

  @IsNumber()
  lastTime: number;
}
