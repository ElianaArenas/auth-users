import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadUsersUseCase } from "src/core/use-cases/uploadUsers.uc";

import { UserUseCase } from "src/core/use-cases/user.uc";

@Controller('user')
export class UserController {

	constructor(
		private readonly _userUc: UserUseCase,
		private readonly _uploadUc:UploadUsersUseCase
	) { }

	@Post('create')
	async create(@Body() body: any) {
		const user = await this._userUc.createUser(body);
		return user
	}


	@Post('createByCsv')
	@UseInterceptors(
		FileInterceptor('csv')
	)
	async createUsersByCsv(@UploadedFile() csv: Express.Multer.File) {
		this._uploadUc.uploadUsers(csv.buffer);
	}

}