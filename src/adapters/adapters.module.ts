import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { ClientController } from './api/client.controller';
import { UserController } from './api/user.controller';

@Module({
  imports:[
    CoreModule
  ],
  controllers:[
    UserController,
    ClientController
  ]
})
export class AdaptersModule {}
