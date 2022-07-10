import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class UploadClientsUseCase {

  abstract uploadClients(csv: Buffer): Promise<any>;
  
}