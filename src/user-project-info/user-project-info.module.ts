import { Module } from '@nestjs/common';
import { UserProjectInfoService } from './user-project-info.service';
import { UserProjectInfoController } from './user-project-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserProjectInfo,
  UserProjectInfoSchema,
} from './schema/user-project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserProjectInfo.name,
        schema: UserProjectInfoSchema,
      },
    ]),
  ],
  controllers: [UserProjectInfoController],
  providers: [UserProjectInfoService],
})
export class UserProjectInfoModule {}
