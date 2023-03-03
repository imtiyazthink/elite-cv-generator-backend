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
import { UserProjectInfoService } from './user-project-info.service';
import { CreateUserProjectInfoDto } from './dto/create-user-project-info.dto';
import { UpdateUserProjectInfoDto } from './dto/update-user-project-info.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'src/auth/decorator/context';

@Controller('user-project-info')
export class UserProjectInfoController {
  constructor(
    private readonly userProjectInfoService: UserProjectInfoService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createUserProjectInfoDto: CreateUserProjectInfoDto,
    @Context() ctx: any,
  ) {
    return this.userProjectInfoService.create(
      createUserProjectInfoDto,
      ctx._id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Context() ctx: any) {
    return this.userProjectInfoService.findAll(ctx._id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Context() ctx: any) {
    return this.userProjectInfoService.findOne(id, ctx._id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateUserProjectInfoDto: UpdateUserProjectInfoDto,
    @Context() ctx: any,
  ) {
    return this.userProjectInfoService.update(
      id,
      updateUserProjectInfoDto,
      ctx._id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Context() ctx: any) {
    return this.userProjectInfoService.remove(id, ctx._id);
  }
}
