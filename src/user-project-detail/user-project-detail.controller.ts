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
import { UserProjectDetailService } from './user-project-detail.service';
import { CreateUserProjectDetailDto } from './dto/create-user-project-detail.dto';
import { UpdateUserProjectDetailDto } from './dto/update-user-project-detail.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'src/auth/decorator/context';

@Controller('user-project-detail')
export class UserProjectDetailController {
  constructor(
    private readonly userProjectDetailService: UserProjectDetailService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createUserProjectDetailDto: CreateUserProjectDetailDto,
    @Context() ctx: any,
  ) {
    return this.userProjectDetailService.create(
      createUserProjectDetailDto,
      ctx._id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Context() ctx: any) {
    return this.userProjectDetailService.findAll(ctx._id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Context() ctx: any) {
    return this.userProjectDetailService.findOne(id, ctx._id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateUserProjectDetailDto: UpdateUserProjectDetailDto,
    @Context() ctx: any,
  ) {
    return this.userProjectDetailService.update(
      id,
      updateUserProjectDetailDto,
      ctx._id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Context() ctx: any) {
    return this.userProjectDetailService.remove(id, ctx._id);
  }
}
