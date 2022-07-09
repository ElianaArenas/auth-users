
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { IUserDriver } from '../user-type.driver'
import { User } from '../schemas'


export class UserDriver implements IUserDriver {

  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) { }

  
  async create(data: any): Promise<any> {
    const user = await this._userRepository.save({
      ...data,
    })
    return user
  }

  async find(username:string): Promise<any> {
    return await this._userRepository.findOneBy({username})
  }

  async findAll(): Promise<any> {
    return await this._userRepository.find();
  }
  
  async update(username,data: any): Promise<any> {
    return await this._userRepository.update({username},data)
  }

  async delete(username): Promise<any> {
    return await this._userRepository.delete({username})
  }

}