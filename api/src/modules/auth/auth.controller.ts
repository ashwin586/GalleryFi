import { UserService } from './../user/user.service';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Signup } from './interface/signup.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signup(@Body() data: Signup) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('signin')
  async signin() {}
}
