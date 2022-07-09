import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class UploadUsersUseCase {

  abstract uploadUsers(data: any): Promise<any>;
  
}