import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from '../dto/Address';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address) private addressesRepository: Repository<Address>,
  ) {}

  async canSubmitAnswers(addressToCheck: string) {
    try {
      const address = await this.addressesRepository.findOne({
        where: { address: addressToCheck },
      });
      const timeNow = Date.now();
      const lastTime = new Date(address.lastTime).getTime();
      const elapsedMinutes = (timeNow - lastTime) / (1000 * 60);
      let result = false;
      if (elapsedMinutes > 5) {
        await this.addressesRepository.save({
          id: address.id,
          address: address.address,
          lastTime: new Date().toISOString(),
        });
        result = true;
      } else result = false;
      return result;
    } catch (error) {
      return false;
    }
  }
  async saveAddreess(addressDto: CreateAddressDto) {
    return this.addressesRepository.save(addressDto);
  }
}
