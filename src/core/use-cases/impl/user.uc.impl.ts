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
    const user = await this._userDriver.find(id);
    return user;
  }

  async getAllUsers(): Promise<any> {
    const users = await this._userDriver.findAll();
    return users;
  }

  async updateUser(id: any, data: any): Promise<any> {
    const user = await this._userDriver.update(id,data);
    return user;
  }

  async deleteUser(id:any): Promise<any> {
    const user = await this._userDriver.delete(id);
    return user;
  }
}