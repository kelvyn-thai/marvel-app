import {
    marvelApiConfigs
} from "Config";

class ApiServices {
    private type: string;
    constructor(type: string) {
        this.type = type;
    }
    getApiServices = () => `${marvelApiConfigs.domain}/${this.type}`;

    getConfig = () => ({
        ts: marvelApiConfigs.ts,
        apikey: marvelApiConfigs.apikey,
        hash: marvelApiConfigs.hash
    })
}

export default ApiServices;