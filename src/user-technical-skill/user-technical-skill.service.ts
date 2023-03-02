import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserTechnicalSkillDto } from './dto/create-user-technical-skill.dto';
import { UpdateUserTechnicalSkillDto } from './dto/update-user-technical-skill.dto';
import {
  UserTechnicalSkill,
  UserTechnicalSkillDocument,
} from './schema/user-technical.schema';

@Injectable()
export class UserTechnicalSkillService {
  constructor(
    @InjectModel(UserTechnicalSkill.name)
    private readonly userTechnicalSkillModel: Model<UserTechnicalSkillDocument>,
  ) {}

  async create(createUserTechnicalSkillDto: CreateUserTechnicalSkillDto) {
    try {
      const userTechnicalSkill = new this.userTechnicalSkillModel(
        createUserTechnicalSkillDto,
      );
      const newuserTechnicalSkill = await userTechnicalSkill.save();
      return {
        data: newuserTechnicalSkill,
        message: 'User Technical Skill Created Successfully!',
        statusCode: HttpStatus.CREATED,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const userTechnicalSkills = await this.userTechnicalSkillModel
        .find()
        .exec();
      return {
        data: userTechnicalSkills,
        message: 'User Technical Skill Retrieved Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const userTechnicalSkillById =
        await this.userTechnicalSkillModel.findById(id);
      if (!userTechnicalSkillById) {
        throw new HttpException("Data Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      return {
        data: userTechnicalSkillById,
        message: 'User Technical Skill Retrieved Bd Id Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async update(
    id: string,
    updateUserTechnicalSkillDto: UpdateUserTechnicalSkillDto,
  ) {
    try {
      const userTechnicalSkillById =
        await this.userTechnicalSkillModel.findById(id);
      if (!userTechnicalSkillById) {
        throw new HttpException("Data Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const updatedUserPerosnalDetail =
        await this.userTechnicalSkillModel.findByIdAndUpdate(
          id,
          updateUserTechnicalSkillDto,
          { new: true },
        );
      return {
        data: updatedUserPerosnalDetail,
        message: 'User Technical Skill Updated Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }

  async remove(id: string) {
    try {
      const userTechnicalSkillById =
        await this.userTechnicalSkillModel.findById(id);
      if (!userTechnicalSkillById) {
        throw new HttpException("Data Doesn't Exist!", HttpStatus.NOT_FOUND);
      }
      const deletedUserTechnicalSkills =
        await this.userTechnicalSkillModel.findByIdAndRemove(id);
      return {
        data: deletedUserTechnicalSkills,
        message: 'User Technical Skill Deleted Successfully!',
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      throw new HttpException((err as Error).message, err.status);
    }
  }
}
