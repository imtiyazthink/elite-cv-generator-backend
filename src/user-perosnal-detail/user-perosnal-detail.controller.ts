import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserPersonalDetailService } from './user-perosnal-detail.service';
import { CreateUserPersonalDetailDto } from './dto/create-user-perosnal-detail.dto';
import { UpdateUserPersonalDetailDto } from './dto/update-user-personal-detail.dto';

@Controller('user-personal-detail')
export class UserPersonalDetailController {
  constructor(
    private readonly userPerosnalService: UserPersonalDetailService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserPersonalDetailDto) {
    return this.userPerosnalService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userPerosnalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPerosnalService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserPersonalDetailDto,
  ) {
    return this.userPerosnalService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPerosnalService.remove(id);
  }
}
