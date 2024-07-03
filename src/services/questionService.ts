import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { GetAllQuestionsByExamIdResponse } from "@/models/response/Question/getAllQuestionsByExamIdResponse";
import axios, { AxiosResponse } from "axios";
import { GetAllQuestionsPaginatedResponse } from "@/models/response/Question/getAllQuestionsPaginatedResponse";

class QuestionService extends BaseService<GetAllQuestionsPaginatedResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Questions");
      
    }

    // getQuestionsByExamId(examId: string,page = "0", pageSize = "10"): Promise<AxiosResponse<GetAllQuestionsByExamIdResponse>> {
    //     const params = new URLSearchParams({ page, pageSize });
    //     const url = `${this.apiUrl}/questions/${examId}`;
    //     return axios.get<GetAllQuestionsByExamIdResponse>(`${url}?${params}`)
       
    // }
}

export default QuestionService;