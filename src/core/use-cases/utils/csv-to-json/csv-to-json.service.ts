import { Injectable } from '@nestjs/common';
import { CsvParser } from '@jynnantonnyx/nest-csv-parser'

class Entity {
  dni: number;
  client_name: string;
  email: string;
  phone_number: string;
  date_joined_company: string;
  city: string;
  country: string;
  address: string;
}

@Injectable()
export class CsvToJsonService {

  constructor(
    private readonly csvParser: CsvParser
  ) {}

  async parse(body:any) {

    // const stream = fs.createReadStream(__dirname + '/some.csv');
    const  data = await this.csvParser.parse(body, Entity);
    const entities: Entity[] = data.list;

    
    const headers: string[] = data.headers;

    return entities;
  }
}
