import { Module } from '@nestjs/common';
import { DriversModule } from '../drivers/drivers.module';
import { UserCase } from './use-cases/impl/user.uc.impl';
import { UserUseCase } from './use-cases/user.uc';
import { ClientUseCase } from './use-cases/client.uc';
import { ClientCase } from './use-cases/impl/client.uc.impl';
import { CsvToJsonModule } from './use-cases/utils/csv-to-json/csv-to-json.module';
import { UploadClientsUseCase } from './use-cases/uploadClients.uc';
import { UploadClientsCase } from './use-cases/impl/uploadClients.uc.impl';
import { CsvToJsonService } from './use-cases/utils/csv-to-json/csv-to-json.service';
import { CsvParser } from '@jynnantonnyx/nest-csv-parser';

@Module({
  imports: [
    DriversModule,
    CsvToJsonModule
  ],
  providers:[
    {provide: UserUseCase, useClass: UserCase},
    {provide: ClientUseCase, useClass: ClientCase},
    {provide: UploadClientsUseCase, useClass: UploadClientsCase},
    CsvToJsonService,
    CsvParser
  ],
  exports: [
    DriversModule,
    UserUseCase,
    ClientUseCase,
    UploadClientsUseCase,
    CsvToJsonModule
  ]
})
export class CoreModule {}
