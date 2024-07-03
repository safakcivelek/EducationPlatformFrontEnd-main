import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllProvinceResponse } from "@/models/response/Province/getAllProvinceResponse";
import axios, { AxiosResponse } from "axios";


class ProvinceService extends BaseService<GetAllProvinceResponse, any, any, any, any, any>  {
    constructor() {
        super(BASE_API_URL + "Provinces");
    }

    getAllProvince(page = "0", pageSize = "100"): Promise<AxiosResponse<GetAllProvinceResponse, any>> {
        const params = new URLSearchParams({ page, pageSize });
        return axios.get<GetAllProvinceResponse>(`${this.apiUrl}?${params}`);
    }
}

export default ProvinceService;