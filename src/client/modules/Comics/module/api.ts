import ApiServices from "@api-services";
import Axios from "axios";

const ComicsType = "comics";

class ComicsApiServices extends ApiServices {
    private api: string;
    private config: any;
    constructor() {
        super(ComicsType);
        this.api = this.getApiServices();
        this.config = this.getConfig();
    }
    apiGetComicsMarvel = (paramsConfig: any) => Axios.get(this.api, {
        params:{
            ...paramsConfig,
            ...this.config
        }
    })

    apiGetComicMarvel = (comicId: any) => Axios.get(`${this.api}/${comicId}`, {
        params:{
            ...this.config
        }
    })
    
}

export default new ComicsApiServices();