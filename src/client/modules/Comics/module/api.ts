import ApiServices from "ApiServices";
import Axios from "axios";

const ComicsType = "comics";

class ComicsApiServices extends ApiServices {
    private api: string;
    constructor() {
        super(ComicsType);
        this.api = this.getApiServices();
    }
    apiGetComicsMarvel = (params: any) => Axios.get(this.api, {
        params
    })
}

export default new ComicsApiServices();