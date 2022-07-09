import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { validate } from './config/env.validation';

@Module({
  imports:[
    ConfigModule.forRoot({
      validate,
      isGlobal:true,
      load:[databaseConfig],
      expandVariables:true
    })
  ]
})

export class CommonsModule {}
