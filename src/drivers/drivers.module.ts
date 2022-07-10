import { Module } from '@nestjs/common';
import { databaseProviders } from './connect.database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client, User } from './schemas';
import { IUserDriver } from './user-type.driver';
import { UserDriver } from './impl/user-type.driver.impl';
import { IClientDriver } from './client-type.driver';
import { ClientDriver } from './impl/client-type.driver.impl';
import { ClientSubscriber } from './client.subscriber';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [
    ...databaseProviders,
    TypeOrmModule.forFeature([User, Client])
  ],
  providers: [
    { provide: IUserDriver, useClass: UserDriver },
    { provide: IClientDriver, useClass: ClientDriver },
    UtilsService,
    ClientSubscriber,
  ],
  exports:[
    IUserDriver,
    IClientDriver,
  ]
})
export class DriversModule { }
