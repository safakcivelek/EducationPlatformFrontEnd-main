import { GetAllExamsPaginatedResponse } from "@/models/response/Exam/getAllExamsPaginatedResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import axios, { AxiosResponse } from "axios";
import { GetAllUserAnswerPaginatedResponse } from "../models/response/userAnswer/getAllUserAnswerPaginatedResponse";


class UserAnswerService extends BaseService<GetAllUserAnswerPaginatedResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "UserAnswers");
      
    }
   
}

export default UserAnswerService;