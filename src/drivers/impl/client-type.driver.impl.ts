
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from '../schemas'
import { IClientDriver } from '../client-type.driver'


export class ClientDriver implements IClientDriver {

  constructor(
    @InjectRepository(Client)
    private readonly _clientRepository: Repository<Client>
  ) { }


  async create(data: any) {

    const getArrayAsChunks = (array, chunkSize) => {
      let result = [];
      let data = array.slice(0);
      while (data[0]) {
        result.push(data.splice(0, chunkSize));
      }
      return result;
    };

    const chunksArray = getArrayAsChunks(data, 50);

    chunksArray.map(async oneChunk => {
      await this._clientRepository
        .createQueryBuilder()
        .insert()
        .into(Client)
        .values(oneChunk.map(item => item))
        .execute();
    });

  }

  async find(id: any): Promise<any> {
    return await this._clientRepository.findOneBy({ dni: id })
  }

  async findAll(): Promise<any> {
    return await this._clientRepository.find();
  }

  async update(id, data: any): Promise<any> {
    return await this._clientRepository.update({ dni: id }, data)
  }

  async delete(id): Promise<any> {
    return await this._clientRepository.delete({ dni: id })
  }

}