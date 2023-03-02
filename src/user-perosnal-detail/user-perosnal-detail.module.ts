import { Module } from '@nestjs/common';
import { UserPersonalDetailService } from './user-perosnal-detail.service';
import { UserPersonalDetailController } from './user-perosnal-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserPersonalDetail,
  UserPersonalDetailSchema,
} from './schema/user-personal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserPersonalDetail.name,
        schema: UserPersonalDetailSchema,
      },
    ]),
  ],
  controllers: [UserPersonalDetailController],
  providers: [UserPersonalDetailService],
})
export class UserPersonalDetailModule {}
