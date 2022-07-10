import { Injectable } from "@nestjs/common";

import { IClientDriver } from '../../../drivers/client-type.driver';
import { UploadClientsUseCase } from "../uploadClients.uc";
import { CsvToJsonService } from "../utils/csv-to-json/csv-to-json.service";


@Injectable()
export class UploadClientsCase implements UploadClientsUseCase {

  constructor(
    private readonly _clientDriver: IClientDriver,
    private readonly _csvToJson: CsvToJsonService
  ) { }


  async uploadClients(csv:Buffer): Promise<any> {

    //Convert the csv file into an array of Json to create the clients
    const clients = await this._csvToJson.parse(csv);
    return await this._clientDriver.createMany(clients);
  }

 
}