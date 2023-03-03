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
import { UserTechnicalSkillService } from './user-technical-skill.service';
import { CreateUserTechnicalSkillDto } from './dto/create-user-technical-skill.dto';
import { UpdateUserTechnicalSkillDto } from './dto/update-user-technical-skill.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'src/auth/decorator/context';

@Controller('user-technical-skill')
export class UserTechnicalSkillController {
  constructor(
    private readonly userTechnicalSkillService: UserTechnicalSkillService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createUserTechnicalSkillDto: CreateUserTechnicalSkillDto,
    @Context() ctx: any,
  ) {
    return this.userTechnicalSkillService.create(
      createUserTechnicalSkillDto,
      ctx._id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Context() ctx: any) {
    return this.userTechnicalSkillService.findAll(ctx._id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Context() ctx: any) {
    return this.userTechnicalSkillService.findOne(id, ctx._id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateUserTechnicalSkillDto: UpdateUserTechnicalSkillDto,
    @Context() ctx: any,
  ) {
    return this.userTechnicalSkillService.update(
      id,
      updateUserTechnicalSkillDto,
      ctx._id,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Context() ctx: any) {
    return this.userTechnicalSkillService.remove(id, ctx._id);
  }
}
