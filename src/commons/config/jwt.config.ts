import { registerAs } from "@nestjs/config";

export default registerAs('jwt',()=>({
    secret:process.env.JWT_SECRET,
    expirationTime:process.env.JWT_EXPIRATION_TIME,
    refreshTokenSecret:process.env.JWT_REFRESH_TOKEN_SECRETD,
    refreshTokenExpiration:process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME
}))