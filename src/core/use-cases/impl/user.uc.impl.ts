import { Injectable } from "@nestjs/common";

import { IUserDriver } from '../../../drivers/user-type.driver'
import { UserUseCase } from "../user.uc";

@Injectable()
export class UserCase implements UserUseCase {

  constructor(
    private readonly _userDriver: IUserDriver
  ) { }

  async createUser(data: any): Promise<any> {
    const user = await this._userDriver.create(data);
    return user;
  }

  async getUser(id: any): Promise<any> {
    return await this._userDriver.get(id);
  }

  async getAllUsers(): Promise<any> {
    return await this._userDriver.getAll();
  }

  async updateUser(id: any, data: any): Promise<any> {
    return await this._userDriver.update(id,data);
  }

  async deleteUser(id:any): Promise<any> {
    return await this._userDriver.delete(id);
  }

}