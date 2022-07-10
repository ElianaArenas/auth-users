
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { IUserDriver } from '../user-type.driver'
import { User } from '../schemas'
import { ClientSubscriber } from '../client.subscriber'


export class UserDriver implements IUserDriver {

  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
    private readonly _clientSubscriber: ClientSubscriber
  ) { }

  
  async create(data: any): Promise<any> {
    return await this._userRepository.save({
      ...data,
    })
  }

  async get(id:number): Promise<any> {
    return await this._userRepository.findOneBy({id})
  }

  async getAll(): Promise<any> {
    return await this._userRepository.find();
  }
  
  async update(id,data: any): Promise<any> {
    return await this._userRepository.update({id},data)
  }

  async delete(id): Promise<any> {
    return await this._userRepository.delete({id})
  }

}