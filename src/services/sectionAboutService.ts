import { GetAllSectionAboutResponse } from "@/models/response/SectionAbout/getAllSectionAboutResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class SectionAboutService extends BaseService<GetAllSectionAboutResponse,any, any, any, any, any>  {
    constructor(){
        super(BASE_API_URL + "SectionAbouts");
    }
}

export default SectionAboutService;