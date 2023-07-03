import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/addresses.service';
import { CreateUserDto } from '../dto/User';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':address')
  getUserDataByAddress(@Param('address') address: string) {
    return this.usersService.getUserDataByAddress(address);
  }

  @Post()
  saveUserData(@Body() userDto: CreateUserDto) {
    return this.usersService.saveUserData(userDto);
  }

  @Put(':userId')
  updateUserData(@Param('userId') userId: number) {
    return this.usersService.updateUserData(userId);
  }
}
