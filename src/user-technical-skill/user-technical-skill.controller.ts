import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTechnicalSkillService } from './user-technical-skill.service';
import { CreateUserTechnicalSkillDto } from './dto/create-user-technical-skill.dto';
import { UpdateUserTechnicalSkillDto } from './dto/update-user-technical-skill.dto';

@Controller('user-technical-skill')
export class UserTechnicalSkillController {
  constructor(private readonly userTechnicalSkillService: UserTechnicalSkillService) {}

  @Post()
  create(@Body() createUserTechnicalSkillDto: CreateUserTechnicalSkillDto) {
    return this.userTechnicalSkillService.create(createUserTechnicalSkillDto);
  }

  @Get()
  findAll() {
    return this.userTechnicalSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTechnicalSkillService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTechnicalSkillDto: UpdateUserTechnicalSkillDto) {
    return this.userTechnicalSkillService.update(id, updateUserTechnicalSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTechnicalSkillService.remove(id);
  }
}
