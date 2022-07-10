import { Body, Controller, Post } from "@nestjs/common";
import { UserUseCase } from "src/core/use-cases/user.uc";

@Controller('user')
export class UserController {

	constructor(
		private readonly _userUc: UserUseCase,
	) { }

	@Post()
	async create(@Body() body: any) {
		return await this._userUc.createUser(body);
	}

}