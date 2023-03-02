import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPersonalDetailModule } from './user-perosnal-detail/user-perosnal-detail.module';
import { UserProfessionalDetailModule } from './user-professional-detail/user-professional-detail.module';
import { UserTechnicalSkillModule } from './user-technical-skill/user-technical-skill.module';
import { UserProjectInfoModule } from './user-project-info/user-project-info.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserPersonalDetailModule,
    UserProfessionalDetailModule,
    UserTechnicalSkillModule,
    UserProjectInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
