import * as dotenv from "dotenv";
import * as path from 'path';

const APP_ENV_DEFAULT = {
    PORT: 3000,
    TS: 1,
    APIKEY: '',
    HASH: '',
    DOMAIN: 'domain.com',
    ANOTHER: ""
}

dotenv.config();
let pathEnv;
switch (process.env.NODE_ENV) {
    case "test":
        pathEnv = path.resolve(__dirname, '.env.test');
    case "production":
        pathEnv = path.resolve(__dirname, '.env.production');
    default:
        pathEnv = path.resolve(__dirname, '.env');
}

const APP_ENV = {
    ... dotenv.config(pathEnv).parsed
};

for (let item in APP_ENV) {
    APP_ENV_DEFAULT[item] = APP_ENV[item]     
}

export default APP_ENV_DEFAULT;