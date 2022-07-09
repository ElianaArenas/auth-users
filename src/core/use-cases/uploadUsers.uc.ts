import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class UploadUsersUseCase {

  abstract uploadUsers(csv: Buffer): Promise<any>;
  
}