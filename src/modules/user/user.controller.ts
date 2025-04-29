import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from 'generated/prisma';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
