import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  ExecutionContext,
} from '@nestjs/common';
import { UserPersonalDetailService } from './user-perosnal-detail.service';
import { CreateUserPersonalDetailDto } from './dto/create-user-perosnal-detail.dto';
import { UpdateUserPersonalDetailDto } from './dto/update-user-personal-detail.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'src/auth/decorator/context';

@Controller('user-personal-detail')
export class UserPersonalDetailController {
  constructor(
    private readonly userPerosnalService: UserPersonalDetailService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createUserPersonalDetailDto: CreateUserPersonalDetailDto,
    @Context() ctx: any,
  ) {
    return this.userPerosnalService.create(
      createUserPersonalDetailDto,
      ctx._id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Context() ctx: any) {
    return this.userPerosnalService.findAll(ctx._id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Context() ctx: any) {
    return this.userPerosnalService.findOne(id, ctx._id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateUserPersonalDetailDto: UpdateUserPersonalDetailDto,
    @Context() ctx: any,
  ) {
    return this.userPerosnalService.update(
      id,
      updateUserPersonalDetailDto,
      ctx._id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Context() ctx: any) {
    return this.userPerosnalService.remove(id, ctx._id);
  }
}
