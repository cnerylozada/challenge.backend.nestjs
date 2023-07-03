import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUserDataByAddress(address: string) {
    return this.usersRepository.findOne({
      where: { address },
    });
  }

  async saveUserData(userDto: CreateUserDto) {
    return this.usersRepository.save(userDto);
  }

  async updateUserData(userId: number) {
    const userData = await this.usersRepository.findOne({
      where: { id: userId },
    });
    userData.lastTime = new Date().toISOString();
    return this.usersRepository.save(userData);
  }
}
