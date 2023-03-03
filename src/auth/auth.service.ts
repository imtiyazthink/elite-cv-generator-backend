import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtPayload } from './dto/payload.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto) {
    try {
      await this.usersService.create(userDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'User Registered Successfully!',
      };
    } catch (err) {
      throw err;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await this.usersService.findByLogin(loginUserDto);

      const token = this._createToken(user);

      return {
        statusCode: HttpStatus.OK,
        message: 'User Logged in Successfully!',
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          ...token,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  async validateUser(payload: JwtPayload) {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ email }: User) {
    const expiresIn = process.env.EXPIRESIN;

    const user = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
