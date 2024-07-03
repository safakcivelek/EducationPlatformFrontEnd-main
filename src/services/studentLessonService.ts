import axios, { AxiosResponse } from "axios";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { CreateStudentLessonRequest } from "../models/request/StudentLesson/CreateStudentLessonRequest";
import { UpdateStudentLessonRequest } from "../models/request/StudentLesson/UpdateStudentLessonRequest";
import { StudentLessonModel } from "../models/response/StudentLesson/StudentLessonModel";
import { CreateStudentLessonResponse } from "../models/response/StudentLesson/CreateStudentLessonResponse";
import { UpdatedStudentLessonResponse } from "../models/response/StudentLesson/UpdatedStudentLessonResponse";



export interface GetCompletedLessonsByStudentIdRequest {
    userId: number;
}


export interface CompletedLessonDto {
    lessonId: string;
    isCompleted: boolean;
}
export class StudentLessonService extends BaseService<
    StudentLessonModel[],
    StudentLessonModel,
    CreateStudentLessonRequest,
    CreateStudentLessonResponse,
    UpdateStudentLessonRequest,
    UpdatedStudentLessonResponse
>{
    constructor() {
        super(BASE_API_URL + "StudentLessons");
    }

    createStudentLesson(request: CreateStudentLessonRequest): Promise<AxiosResponse<CreateStudentLessonResponse>> {
        return axios.post<CreateStudentLessonResponse>(`${this.apiUrl}`, request);
    }

    updateStudentLesson(request: UpdateStudentLessonRequest): Promise<AxiosResponse<UpdatedStudentLessonResponse>> {
        return axios.put<UpdatedStudentLessonResponse>(`${this.apiUrl}`, request);
    }

    getCompletedLessonsByStudentId(request: GetCompletedLessonsByStudentIdRequest): Promise<AxiosResponse<CompletedLessonDto[]>> {
        const params = new URLSearchParams({ userId: request.userId.toString() });
        return axios.get<CompletedLessonDto[]>(`${this.apiUrl}/GetCompletedLessons?${params}`);
    }

}


export default StudentLessonService;