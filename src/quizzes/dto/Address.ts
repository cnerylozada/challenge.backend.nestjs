import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  address: string;

  @IsString()
  lastTime: string;
}
