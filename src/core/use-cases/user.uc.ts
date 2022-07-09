import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class UserUseCase {

  abstract createUser(data: any): Promise<any>;
  abstract getUser(id:any): Promise<any>;
  abstract getAllUsers(): Promise<any>;
  abstract updateUser(id:any,data:any): Promise<any>;
  abstract deleteUser(id:any): Promise<any>;

}