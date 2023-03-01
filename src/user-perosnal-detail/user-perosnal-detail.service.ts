import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserPersonalDetailDto } from './dto/create-user-perosnal-detail.dto';
import { UpdateUserPersonalDetailDto } from './dto/update-user-personal-detail.dto';
import {
  UserPersonDetail,
  UserPersonDetailDocument,
} from './schema/user-personal..schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserPersonDetail.name)
    private readonly userPersonalDetailModel: Model<UserPersonDetailDocument>,
  ) {}

  async create(createUserPersonalDetailDto: CreateUserPersonalDetailDto) {
    try {
      const userPersonalDetail = new this.userPersonalDetailModel(
        createUserPersonalDetailDto,
      );
      const newUserPersonalDetail = await userPersonalDetail.save();
      return {
        data: newUserPersonalDetail,
        message: 'User Personal Detail Created Successfully!',
        statusCode: HttpStatus.CREATED,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const userPersonalDetails = await this.userPersonalDetailModel
        .find()
        .exec();
      return {
        data: userPersonalDetails,
        message: 'User Personal Detail Retrieved Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const userPersonalDetailById =
        await this.userPersonalDetailModel.findById(id);
      if (!userPersonalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      return {
        data: userPersonalDetailById,
        message: 'User Personal Detail Retrieved Bd Id Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async update(
    id: string,
    updateUserPersonalDetailDto: UpdateUserPersonalDetailDto,
  ) {
    try {
      const userPersonalDetailById =
        await this.userPersonalDetailModel.findById(id);
      if (!userPersonalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const updatedUserPerosnalDetail =
        await this.userPersonalDetailModel.findByIdAndUpdate(
          id,
          updateUserPersonalDetailDto,
          { new: true },
        );
      return {
        data: updatedUserPerosnalDetail,
        message: 'User Personal Detail Updated Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async remove(id: string) {
    try {
      const userPersonalDetailById =
        await this.userPersonalDetailModel.findById(id);
      if (!userPersonalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const deletedUserPersonalDetails =
        await this.userPersonalDetailModel.findByIdAndRemove(id);
      return {
        data: deletedUserPersonalDetails,
        message: 'User Personal Detail Deleted Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }
}
