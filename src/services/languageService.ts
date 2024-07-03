
import { GetAllLanguageResponse } from "@/models/response/Language/getAllLanguageResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class LanguageService extends BaseService<GetAllLanguageResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Languages");
    }
}

export default LanguageService;