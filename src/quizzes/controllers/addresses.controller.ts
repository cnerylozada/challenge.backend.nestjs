import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AddressesService } from '../services/addresses.service';
import { CreateAddressDto } from '../dto/Address';

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Get(':address')
  canSubmitAnswers(@Param('address') address: string) {
    return this.addressesService.getDataByAddress(address);
  }

  @Post()
  saveQuiz(@Body() address: CreateAddressDto) {
    return this.addressesService.saveAddreess(address);
  }

  @Put(':addressId')
  updateQuestion(@Param('addressId') addressId: number) {
    return this.addressesService.updateAddress(addressId);
  }
}
