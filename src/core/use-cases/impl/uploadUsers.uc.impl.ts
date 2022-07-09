import { Injectable } from "@nestjs/common";

import { IClientDriver } from '../../../drivers/client-type.driver';
import { UploadUsersUseCase } from "../uploadUsers.uc";
import { CsvToJsonService } from "../utils/csv-to-json/csv-to-json.service";
import { IUserDriver } from "src/drivers/user-type.driver";


@Injectable()
export class UploadUsersCase implements UploadUsersUseCase {

  constructor(
    private readonly _clientDriver: IClientDriver,
    private readonly _userDriver: IUserDriver,
    private readonly _csvToJson: CsvToJsonService
  ) { }

  async uploadUsers(csv:Buffer): Promise<any> {
    
    const clients = await this._csvToJson.parse(csv);
    
    for (const client of clients) {
      
    }
    
  }

  
 
}