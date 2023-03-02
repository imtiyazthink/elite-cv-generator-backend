import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserProjectDetailDto } from './dto/create-user-project-detail.dto';
import { UpdateUserProjectDetailDto } from './dto/update-user-project-detail.dto';
import {
  UserProjectDetail,
  UserProjectDetailDocument,
} from './schema/user-project-detail.schema';

@Injectable()
export class UserProjectDetailService {
  constructor(
    @InjectModel(UserProjectDetail.name)
    private readonly userProjectDetailModel: Model<UserProjectDetailDocument>,
  ) {}

  async create(createUserProjectDetailDto: CreateUserProjectDetailDto) {
    try {
      const userProjectDetail = new this.userProjectDetailModel(
        createUserProjectDetailDto,
      );
      const newuserProjectDetail = await userProjectDetail.save();
      return {
        data: newuserProjectDetail,
        message: 'User Project Detail Created Successfully!',
        statusCode: HttpStatus.CREATED,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const userProjectDetail = await this.userProjectDetailModel.find().exec();
      return {
        data: userProjectDetail,
        message: 'User Project Detail Retrieved Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const userProjectDetailById = await this.userProjectDetailModel.findById(
        id,
      );
      if (!userProjectDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      return {
        data: userProjectDetailById,
        message: 'User Project Detail Retrieved Bd Id Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async update(
    id: string,
    updateUserProjectDetailDto: UpdateUserProjectDetailDto,
  ) {
    try {
      const userProjectDetailById = await this.userProjectDetailModel.findById(
        id,
      );
      if (!userProjectDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const updatedUserPerosnalDetail =
        await this.userProjectDetailModel.findByIdAndUpdate(
          id,
          updateUserProjectDetailDto,
          { new: true },
        );
      return {
        data: updatedUserPerosnalDetail,
        message: 'User Project Detail Updated Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async remove(id: string) {
    try {
      const userProjectDetailById = await this.userProjectDetailModel.findById(
        id,
      );
      if (!userProjectDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const deletedUserProjectDetail =
        await this.userProjectDetailModel.findByIdAndRemove(id);
      return {
        data: deletedUserProjectDetail,
        message: 'User Project Detail Deleted Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }
}
