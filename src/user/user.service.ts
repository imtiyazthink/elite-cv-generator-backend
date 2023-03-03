import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDto } from 'src/auth/dto/user-login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { UserDto } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    return await this.userModel.findOne(options);
  }

  async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.findOne({ email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    const areEqual = await bcrypt.compare(password, user.password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    const user = await this.findOne({ email });
    return user;
  }

  async create(userDto: CreateUserDto) {
    const { username, password, email } = userDto;

    const userEmailInDb = await this.findOne({ email });
    if (userEmailInDb) {
      throw new HttpException(
        'User email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userNameInDb = await this.findOne({ username });
    if (userNameInDb) {
      throw new HttpException(
        'UserName already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      username,
      password: passwordHash,
      email,
    });

    return await this.userModel.create(user);
  }
}
