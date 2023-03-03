import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserProfessionalDetailService } from './user-professional-detail.service';
import { CreateUserProfessionalDetailDto } from './dto/create-user-professional-detail.dto';
import { UpdateUserProfessionalDetailDto } from './dto/update-user-professional-detail.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'src/auth/decorator/context';

@Controller('user-professional-detail')
export class UserProfessionalDetailController {
  constructor(
    private readonly userProfessionalDetailService: UserProfessionalDetailService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createUserProfessionalDetailDto: CreateUserProfessionalDetailDto,
    @Context() ctx: any,
  ) {
    return this.userProfessionalDetailService.create(
      createUserProfessionalDetailDto,
      ctx._id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Context() ctx: any) {
    return this.userProfessionalDetailService.findAll(ctx._id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Context() ctx: any) {
    return this.userProfessionalDetailService.findOne(id, ctx._id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateUserProfessionalDetailDto: UpdateUserProfessionalDetailDto,
    @Context() ctx: any,
  ) {
    return this.userProfessionalDetailService.update(
      id,
      updateUserProfessionalDetailDto,
      ctx._id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Context() ctx: any) {
    return this.userProfessionalDetailService.remove(id, ctx._id);
  }
}
