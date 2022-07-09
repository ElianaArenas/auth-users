import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { UserController } from './api/user.controller';

@Module({
  imports:[
    CoreModule
  ],
  controllers:[
    UserController
  ]
})
export class AdaptersModule {}
