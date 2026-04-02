import { IsEmail, IsNotEmpty, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RefreshDto {
  // If refresh token is in cookie, we don't need it in body, but let's accept it in body for flexibility
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export enum RegisterRoleType {
  LANDLORD = 'LANDLORD',
  TENANT = 'TENANT',
}

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEnum(RegisterRoleType)
  role_type: RegisterRoleType;

  @IsString()
  @IsOptional()
  organisation_name?: string;
}
