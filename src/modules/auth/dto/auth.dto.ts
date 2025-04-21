import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  isNotEmpty,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  isPioneer: boolean;
  role: string;
  phone: string;
}
