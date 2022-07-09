import { Module } from '@nestjs/common';
import { DriversModule } from '../drivers/drivers.module';
import { UserCase } from './use-cases/impl/user.uc.impl';
import { UserUseCase } from './use-cases/user.uc';
import { ClientUseCase } from './use-cases/client.uc';
import { ClientCase } from './use-cases/impl/client.uc.impl';
import { CsvToJsonModule } from './use-cases/utils/csv-to-json/csv-to-json.module';

@Module({
  imports: [
    DriversModule,
    CsvToJsonModule
  ],
  providers:[
    {provide: UserUseCase, useClass: UserCase},
    {provide: ClientUseCase, useClass: ClientCase},
    {provide: ClientUseCase, useClass: ClientCase}
  ],
  exports: [
    DriversModule,
    UserUseCase
  ]
})
export class CoreModule {}
