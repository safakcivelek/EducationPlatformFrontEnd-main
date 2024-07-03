import { GetAllProducerCompanyResponse } from "@/models/response/ProducerCompany/getAllProducerCompanyResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class ProducerCompanyService extends BaseService<GetAllProducerCompanyResponse,any, any, any, any, any>  {
    constructor(){
        super(BASE_API_URL + "ProducerCompanies");
    }
}

export default ProducerCompanyService;