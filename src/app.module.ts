import { Module } from '@nestjs/common';
import { CommonsModule } from './commons/commons.module';
import { CoreModule } from './core/core.module';
import { DriversModule } from './drivers/drivers.module';
import { AdaptersModule } from './adapters/adapters.module';
import { CsvToJsonModule } from './csv-to-json/csv-to-json.module';

@Module({
  imports: [CommonsModule, CoreModule, DriversModule, AdaptersModule, CsvToJsonModule],
})
export class AppModule {}
