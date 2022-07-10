import { Body, Controller, Post, UploadedFile, UseInterceptors, Get, Param, Put, Delete, HttpException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ClientUseCase } from "src/core/use-cases/client.uc";
import { UploadClientsUseCase } from "src/core/use-cases/uploadClients.uc";

@Controller('client')
export class ClientController {

  constructor(
    private readonly _clientUc: ClientUseCase,
    private readonly _uploadUc: UploadClientsUseCase
  ) { }


  @Post()
  async create(@Body() body: any) {
    return await this._clientUc.createClient(body);
  }

  @Get()
  async getAll() {
    return await this._clientUc.getAllClients();
  }

  @Get()
  async get(@Param() id: any) {
    return await this._clientUc.getClient(id);
  }

  @Put()
  async update(@Param() id: any, @Body() body: any) {
    return await this._clientUc.updateClient(id, body);
  }

  @Delete()
  async delete(@Param() id: any) {
    return await this._clientUc.deleteClient(id);
  }


  @Post('csv')
  @UseInterceptors(
    FileInterceptor('csv')
  )
  async createByCsv(@UploadedFile() csv: Express.Multer.File) {

    try {
      const message = await this._uploadUc.uploadClients(csv.buffer);
      return { message };
    } catch (error) {
      throw new HttpException(error,500)
    }

  }

}