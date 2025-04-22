import { IsBoolean, isBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  name: string;

  @IsBoolean()
  isPioneer: boolean;

  @IsString()
  role: string;

  @IsString()
  phone: string;
}
