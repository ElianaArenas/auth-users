import {TypeOrmModule} from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Client, User } from './schemas'



export const databaseProviders = [
  //Connect to typeorm
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService], 
    useFactory: async (config: ConfigService) => ({
      ssl: true,
      type: 'mssql',
      database: config.get('database.database'),
      username: config.get('database.user'),
      host: config.get('database.host'),
      password: config.get('database.password'),
      entities: [User,Client],
      port: 1433,
      synchronize: true,
    } as DataSourceOptions)
  })
]