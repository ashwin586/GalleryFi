import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async verifyEmail(email: string): Promise<boolean> {
    return true;
  }
}
