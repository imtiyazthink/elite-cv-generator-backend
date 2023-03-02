import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserProjectInfoDto } from './dto/create-user-project-info.dto';
import { UpdateUserProjectInfoDto } from './dto/update-user-project-info.dto';
import {
  UserProjectInfo,
  UserProjectInfoDocument,
} from './schema/user-project.schema';

@Injectable()
export class UserProjectInfoService {
  constructor(
    @InjectModel(UserProjectInfo.name)
    private readonly userProjectInfoModel: Model<UserProjectInfoDocument>,
  ) {}

  async create(createUserProjectInfoDto: CreateUserProjectInfoDto) {
    try {
      const userProjectIno = new this.userProjectInfoModel(
        createUserProjectInfoDto,
      );
      const newuserProjectIno = await userProjectIno.save();
      return {
        data: newuserProjectIno,
        message: 'User Project Information Created Successfully!',
        statusCode: HttpStatus.CREATED,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const userProjectInos = await this.userProjectInfoModel.find().exec();
      return {
        data: userProjectInos,
        message: 'User Project Information Retrieved Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const userProjectInoById = await this.userProjectInfoModel.findById(id);
      if (!userProjectInoById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      return {
        data: userProjectInoById,
        message: 'User Project Information Retrieved Bd Id Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async update(id: string, updateUserProjectInoDto: UpdateUserProjectInfoDto) {
    try {
      const userProjectInoById = await this.userProjectInfoModel.findById(id);
      if (!userProjectInoById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const updatedUserPerosnalDetail =
        await this.userProjectInfoModel.findByIdAndUpdate(
          id,
          updateUserProjectInoDto,
          { new: true },
        );
      return {
        data: updatedUserPerosnalDetail,
        message: 'User Project Information Updated Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async remove(id: string) {
    try {
      const userProjectInoById = await this.userProjectInfoModel.findById(id);
      if (!userProjectInoById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const deletedUserProjectInos =
        await this.userProjectInfoModel.findByIdAndRemove(id);
      return {
        data: deletedUserProjectInos,
        message: 'User Project Information Deleted Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }
}
