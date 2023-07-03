import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressesService } from '../services/addresses.service';
import { CreateAddressDto } from '../dto/Address';

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Get(':address')
  canSubmitAnswers(@Param('address') address: string) {
    return this.addressesService.canSubmitAnswers(address);
  }

  @Post()
  saveQuiz(@Body() address: CreateAddressDto) {
    return this.addressesService.saveAddreess(address);
  }
}
