import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class ClientUseCase {

  abstract createClient(data: any): Promise<any>;
  abstract updateClient(id:any,data:any): Promise<any>;
  abstract deleteClient(id:any): Promise<any>;
  abstract getAllClients():Promise<any>;
  abstract getClient(id:any):Promise<any>;
}