import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class User {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message:
        'Password atleat should have minimum 1 Uppercase, 1 Lowercase, 1 Special Character Symbol, 1 Numeric Value and Length Should be minimum 8 Character long',
    },
  )
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UserDto extends User {
  @IsNotEmpty()
  _id: string;
}
