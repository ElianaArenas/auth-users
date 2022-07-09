
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Client, User } from '../schemas'
import { IClientDriver } from '../client-type.driver'


export class ClientDriver implements IClientDriver {

  constructor(
    @InjectRepository(Client)
    private readonly _userRepository: Repository<Client>
  ) { }

  
  async create(data: any): Promise<any> {
    const user = await this._userRepository.save({
      ...data,
    })
    return user
  }

  async find(id:any): Promise<any> {
    return await this._userRepository.findOneBy({dni:id})
  }

  async findAll(): Promise<any> {
    return await this._userRepository.find();
  }
  
  async update(id,data: any): Promise<any> {
    return await this._userRepository.update({dni:id},data)
  }

  async delete(id): Promise<any> {
    return await this._userRepository.delete({dni:id})
  }

}