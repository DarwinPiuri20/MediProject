import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: path.resolve(__dirname, '../../.env')});

const checkEnv = (envVar:string,defaultValue?:string):string => {
    const value = process.env[envVar]||defaultValue;
    if (!value) {
        throw new Error(`Missing env var: ${envVar}`);
    }
    return value;
}

export const JWT_SECRET = checkEnv('JWT_SECRET');
export const JWT_EXPIRES_IN = checkEnv('JWT_EXPIRES_IN');

