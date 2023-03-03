import { Module } from '@nestjs/common';
import { UserProfessionalDetailService } from './user-professional-detail.service';
import { UserProfessionalDetailController } from './user-professional-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserProfessionalDetail,
  UserProfessionalDetailSchema,
} from './schema/user-professional.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserProfessionalDetail.name,
        schema: UserProfessionalDetailSchema,
      },
    ]),
  ],
  controllers: [UserProfessionalDetailController],
  providers: [UserProfessionalDetailService],
})
export class UserProfessionalDetailModule {}
