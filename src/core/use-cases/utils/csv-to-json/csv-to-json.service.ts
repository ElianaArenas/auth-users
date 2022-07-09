import { Injectable } from '@nestjs/common';
import { CsvParser, ParsedData } from '@jynnantonnyx/nest-csv-parser'
import { Readable } from 'stream';

class Clients {
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
  ) { }


  /**
  * Convert Buffer to Stream
  * @param { Buffer } binary 
  * @returns { Readable } readableInstanceStream Readable
  */
  bufferToStream(binary: Buffer) {

    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });

    return readableInstanceStream;
  }


  /**
   * Parse csv file to json Array
   * @param { Buffer } csv 
   * @returns { Array<JSON> } A json Array
   */
  async parse(csv: Buffer) {

    const stream = this.bufferToStream(csv);

    const data: ParsedData<Clients> = await this.csvParser.parse(stream, Clients, null, null, { separator: ',' });
    const entities: Clients[] = data.list;

    return entities;
  }
}
