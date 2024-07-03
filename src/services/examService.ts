import { GetAllExamsPaginatedResponse } from "@/models/response/Exam/getAllExamsPaginatedResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import axios, { AxiosResponse } from "axios";
import { GetExamForQuestionsResponse } from "@/models/response/Exam/getExamForQuestionsResponse";

class ExamService extends BaseService<GetAllExamsPaginatedResponse,any,any,any,any,any>  {
    constructor(){
        super(BASE_API_URL + "Exams");
      
    }
    getQuestionsByExamId(examId: string,page = "0", pageSize = "10"): Promise<AxiosResponse<GetExamForQuestionsResponse>> {
        const params = new URLSearchParams({ page, pageSize });
        const url = `${this.apiUrl}/questions/${examId}`;
        return axios.get<GetExamForQuestionsResponse>(`${url}?${params}`)

       
    }
}

export default ExamService;