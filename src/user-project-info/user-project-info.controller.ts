import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserProjectInfoService } from './user-project-info.service';
import { CreateUserProjectInfoDto } from './dto/create-user-project-info.dto';
import { UpdateUserProjectInfoDto } from './dto/update-user-project-info.dto';

@Controller('user-project-info')
export class UserProjectInfoController {
  constructor(
    private readonly userProjectInfoService: UserProjectInfoService,
  ) {}

  @Post()
  create(@Body() createUserProjectInfoDto: CreateUserProjectInfoDto) {
    return this.userProjectInfoService.create(createUserProjectInfoDto);
  }

  @Get()
  findAll() {
    return this.userProjectInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProjectInfoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProjectInfoDto: UpdateUserProjectInfoDto,
  ) {
    return this.userProjectInfoService.update(id, updateUserProjectInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProjectInfoService.remove(id);
  }
}
