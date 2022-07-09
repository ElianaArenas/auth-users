import { Injectable } from "@nestjs/common";

import { ClientUseCase } from '../client.uc';
import { IClientDriver } from '../../../drivers/client-type.driver';


@Injectable()
export class ClientCase implements ClientUseCase {

  constructor(
    private readonly _clientDriver: IClientDriver
  ) { }

  async createClient(data: any): Promise<any> {
    const client = await this._clientDriver.create(data);
    return client;
  }

  async updateClient(id: any, data: any): Promise<any> {
    const client = await this._clientDriver.update(id,data);
    return client;
  }

  async deleteClient(id: any): Promise<any> {
    const client = await this._clientDriver.delete(id);
    return client;
  }
 
}