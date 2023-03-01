import { Module } from '@nestjs/common';
import { UserService } from './user-perosnal-detail.service';
import { UserController } from './user-perosnal-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserPersonDetail,
  UserPersonDetailSchema,
} from './schema/user-personal..schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserPersonDetail.name,
        schema: UserPersonDetailSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
