import { Module } from '@nestjs/common';
import { UserProjectDetailService } from './user-project-detail.service';
import { UserProjectDetailController } from './user-project-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserProjectDetail,
  UserProjectDetailSchema,
} from './schema/user-project-detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserProjectDetail.name,
        schema: UserProjectDetailSchema,
      },
    ]),
  ],
  controllers: [UserProjectDetailController],
  providers: [UserProjectDetailService],
})
export class UserProjectDetailModule {}
