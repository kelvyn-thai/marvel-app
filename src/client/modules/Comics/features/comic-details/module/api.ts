import ApiServices from "@api-services";
import Axios from "axios";

const ComicType = "comics";

class ComicApiServices extends ApiServices {
    private api: string;
    constructor() {
        super(ComicType);
        this.api = this.getApiServices();
    }
    apiGetComicMarvel = (params: any) => Axios.get(this.api, {
        params
    })
}

export default new ComicApiServices();