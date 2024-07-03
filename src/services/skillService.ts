import { GetAllSkillResponse } from "@/models/response/Skill/getAllSkillResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";

class SkillService extends BaseService<GetAllSkillResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Skills");
    }
}

export default SkillService;