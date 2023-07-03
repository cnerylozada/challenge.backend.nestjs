import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from '../dto/Address';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address) private addressesRepository: Repository<Address>,
  ) {}

  async getDataByAddress(address: string) {
    return this.addressesRepository.findOne({
      where: { address },
    });
  }

  async saveAddreess(addressDto: CreateAddressDto) {
    return this.addressesRepository.save(addressDto);
  }

  async updateAddress(addressId: number) {
    const address = await this.addressesRepository.findOne({
      where: { id: addressId },
    });
    address.lastTime = new Date().toISOString();
    return this.addressesRepository.save(address);
  }
}
