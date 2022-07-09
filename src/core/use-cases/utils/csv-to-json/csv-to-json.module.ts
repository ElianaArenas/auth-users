import { Module } from '@nestjs/common';
import { CsvModule } from '@jynnantonnyx/nest-csv-parser';
import { CsvToJsonService } from './csv-to-json.service';

@Module({
  imports:[
    CsvModule
  ],
  providers: [CsvToJsonService]
})
export class CsvToJsonModule {}
