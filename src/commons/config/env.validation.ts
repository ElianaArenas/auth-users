import { plainToInstance } from 'class-transformer'
import {
    IsEnum,
    IsNumber, IsString, validateSync
} from 'class-validator'

enum Environment {
    Development = 'development',
    Production = 'production',
    Local = 'local',
    Test = 'test',
}

class EnviromentVariables {

    //-----------TOKEN--------------
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsString()
    JWT_SECRET: string;

    @IsString()
    JWT_EXPIRATION_TIME: string;

    @IsString()
    JWT_REFRESH_TOKEN_SECRET: string;

    @IsString()
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;

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
    DATABASE_PORT: number;

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