import { Body, Controller, Post } from "@nestjs/common";
import { UserUseCase } from "src/core/use-cases/user.uc";

@Controller('user')
export class UserController{

    constructor(
        private readonly _userUc:UserUseCase
    ){}

    @Post('create')
    async create(@Body() body:any){
        const user = await this._userUc.createUser(body);
        return user
    }   
    
}