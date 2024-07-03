import { GetAllCertificatesResponse } from "@/models/response/Certificate/getAllCertificatesResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class CertificateService extends BaseService<GetAllCertificatesResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Certificates");
    }
}

export default CertificateService;
