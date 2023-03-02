import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserProfessionalDetailDto } from './dto/create-user-professional-detail.dto';
import { UpdateUserProfessionalDetailDto } from './dto/update-user-professional-detail.dto';
import {
  UserProfessionalDetail,
  UserProfessionalDetailDocument,
} from './schema/user-professional.schema';

@Injectable()
export class UserProfessionalDetailService {
  constructor(
    @InjectModel(UserProfessionalDetail.name)
    private readonly userProfessionalDetailModel: Model<UserProfessionalDetailDocument>,
  ) {}

  async create(
    createUserProfessionalDetailDto: CreateUserProfessionalDetailDto,
  ) {
    try {
      const userProfessionalDetail = new this.userProfessionalDetailModel(
        createUserProfessionalDetailDto,
      );
      const newuserProfessionalDetail = await userProfessionalDetail.save();
      return {
        data: newuserProfessionalDetail,
        message: 'User Professional Detail Created Successfully!',
        statusCode: HttpStatus.CREATED,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const userProfessionalDetails = await this.userProfessionalDetailModel
        .find()
        .exec();
      return {
        data: userProfessionalDetails,
        message: 'User Professional Detail Retrieved Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const userProfessionalDetailById =
        await this.userProfessionalDetailModel.findById(id);
      if (!userProfessionalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      return {
        data: userProfessionalDetailById,
        message: 'User Professional Detail Retrieved Bd Id Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async update(
    id: string,
    updateUserProfessionalDetailDto: UpdateUserProfessionalDetailDto,
  ) {
    try {
      const userProfessionalDetailById =
        await this.userProfessionalDetailModel.findById(id);
      if (!userProfessionalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const updatedUserPerosnalDetail =
        await this.userProfessionalDetailModel.findByIdAndUpdate(
          id,
          updateUserProfessionalDetailDto,
          { new: true },
        );
      return {
        data: updatedUserPerosnalDetail,
        message: 'User Professional Detail Updated Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async remove(id: string) {
    try {
      const userProfessionalDetailById =
        await this.userProfessionalDetailModel.findById(id);
      if (!userProfessionalDetailById) {
        throw new HttpException("User Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const deletedUserProfessionalDetails =
        await this.userProfessionalDetailModel.findByIdAndRemove(id);
      return {
        data: deletedUserProfessionalDetails,
        message: 'User Professional Detail Deleted Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }
}
