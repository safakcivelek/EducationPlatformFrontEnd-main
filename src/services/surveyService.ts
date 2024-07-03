import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllSurveyResponse } from "@/models/response/Survey/getAllSurveyResponse";

class SurveyService extends BaseService<GetAllSurveyResponse, any, any, any, any, any> {
    constructor() {
        super(BASE_API_URL + "Surveys");
    }
}

export default SurveyService;