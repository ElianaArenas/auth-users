import { registerAs } from "@nestjs/config";

export default registerAs('database',()=>({
    user:process.env.USERNAME_DB,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}))