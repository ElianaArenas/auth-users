
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from '../schemas'
import { IClientDriver } from '../client-type.driver'
import { UtilsService } from '../utils/utils.service';


export class ClientDriver implements IClientDriver {

  constructor(
    @InjectRepository(Client)
    private readonly _clientRepository: Repository<Client>,
    private utilsService: UtilsService
  ) { }


  async create(data: any) {
    return await this._clientRepository.save(data);
  }

  async createMany(data: any[]): Promise<any> {
    try {
      let chunksArray = this.utilsService.getArrayAsChunks(data, 50);

      chunksArray.map(async oneChunk => {
        await this._clientRepository
          .createQueryBuilder()
          .insert()
          .into(Client)
          .values(oneChunk.map(item => item))
          .execute();
      });
  
      return 'Clients created Successfully'
    } catch (error) {
      throw new Error(error);
    }
   
  }


  async get(id: any): Promise<any> {
    return await this._clientRepository.findOneBy({ dni: id })
  }

  async getAll(): Promise<any> {
    return await this._clientRepository.find();
  }

  async update(id, data: any): Promise<any> {
    return await this._clientRepository.update({ dni: id }, data)
  }

  async delete(id): Promise<any> {
    return await this._clientRepository.delete({ dni: id })
  }

}