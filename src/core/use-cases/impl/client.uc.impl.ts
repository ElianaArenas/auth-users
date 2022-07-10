import { Injectable } from "@nestjs/common";
import { ClientUseCase } from '../client.uc';
import { IClientDriver } from '../../../drivers/client-type.driver';


@Injectable()
export class ClientCase implements ClientUseCase {

  constructor(
    private readonly _clientDriver: IClientDriver
  ) { }


  async createClient(data: any): Promise<any> {
    return await this._clientDriver.create(data);
  }

  async getAllClients(): Promise<any> {
    return await this._clientDriver.getAll();
  }

  async getClient(id: any): Promise<any> {
    return await this._clientDriver.get(id);
  }

  async updateClient(id: any, data: any): Promise<any> {
    return await this._clientDriver.update(id, data);
  }

  async deleteClient(id: any): Promise<any> {
    return await this._clientDriver.delete(id);
  }

}