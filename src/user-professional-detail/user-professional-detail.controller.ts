import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserProfessionalDetailService } from './user-professional-detail.service';
import { CreateUserProfessionalDetailDto } from './dto/create-user-professional-detail.dto';
import { UpdateUserProfessionalDetailDto } from './dto/update-user-professional-detail.dto';

@Controller('user-professional-detail')
export class UserProfessionalDetailController {
  constructor(private readonly userProfessionalDetailService: UserProfessionalDetailService) {}

  @Post()
  create(@Body() createUserProfessionalDetailDto: CreateUserProfessionalDetailDto) {
    return this.userProfessionalDetailService.create(createUserProfessionalDetailDto);
  }

  @Get()
  findAll() {
    return this.userProfessionalDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfessionalDetailService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserProfessionalDetailDto: UpdateUserProfessionalDetailDto) {
    return this.userProfessionalDetailService.update(id, updateUserProfessionalDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfessionalDetailService.remove(id);
  }
}
