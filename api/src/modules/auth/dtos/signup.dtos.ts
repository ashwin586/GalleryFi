import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class Signin {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}
