import { plainToInstance } from 'class-transformer'
import {
    IsNumber, IsString, validateSync
} from 'class-validator';

class EnviromentVariables {

    //------------APP------------------
    @IsNumber()
    PORT: number

    //-----------DATABASE--------------
    @IsString()
    USERNAME: string

    @IsString()
    PASSWORD: string

    @IsString()
    HOST: string

    @IsString()
    DATABASE: string

    @IsNumber()
    DATABASE_PORT: number

    //-----------TOKEN--------------
    @IsString()
    JWT_SECRET: string

    @IsString()
    JWT_EXPIRATION_TIME: string

    @IsString()
    JWT_REFRESH_TOKEN_SECRET: string

    @IsString()
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string

}

//To validate the enviroment variables
export const validate = (config: Record<string, unknown>) => {

    const validateConfig = plainToInstance(EnviromentVariables, config, {
        enableImplicitConversion: true
    })
    const errors = validateSync(validateConfig, {
        skipMissingProperties: false
    })

    if (errors.length > 0) {
        throw new Error(`.env is not defined`)
    }

    return validateConfig
}   