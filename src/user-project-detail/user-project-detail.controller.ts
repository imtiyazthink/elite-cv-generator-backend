import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserProjectDetailService } from './user-project-detail.service';
import { CreateUserProjectDetailDto } from './dto/create-user-project-detail.dto';
import { UpdateUserProjectDetailDto } from './dto/update-user-project-detail.dto';

@Controller('user-project-detail')
export class UserProjectDetailController {
  constructor(
    private readonly userProjectDetailService: UserProjectDetailService,
  ) {}

  @Post()
  create(@Body() createUserProjectDetailDto: CreateUserProjectDetailDto) {
    return this.userProjectDetailService.create(createUserProjectDetailDto);
  }

  @Get()
  findAll() {
    return this.userProjectDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProjectDetailService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProjectDetailDto: UpdateUserProjectDetailDto,
  ) {
    return this.userProjectDetailService.update(id, updateUserProjectDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProjectDetailService.remove(id);
  }
}
