import { GetAllStudentsPaginatedResponse, GetAllStudentsResponse } from "@/models/response/Student/getAllStudentsResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import { StudentUpdateRequest } from "@/models/request/Student/StudentUpdateRequest";
import axios, { AxiosResponse } from "axios";
import { StudentUpdateResponse } from "@/models/response/Student/StudentUpdateResponse";
import { GetUserIdSectionResponse } from "@/models/response/Student/getUserIdSectionResponse";
import { GetStudentSkillsResponse } from "@/models/response/Student/getStudentSkillsResponse";
import { GetStudentUpdatePassword } from "@/models/response/Student/getStudentUpdatePassword";
import { StudentUpdatePasswordRequest } from "@/models/request/Student/StudentUpdatePassword";
import { GetStudentCertificateResponse } from "@/models/response/Student/getStudentCertificateResponse";
import { GetStudentExamsResponse } from "@/models/response/Student/Exam/getStudentExamsResponse";

class StudentService extends BaseService<GetAllStudentsPaginatedResponse, any, any, any, StudentUpdateRequest, StudentUpdateResponse>  {
    constructor() {
        super(BASE_API_URL + "Students");
    }

    studentUpdate(request: StudentUpdateRequest): Promise<AxiosResponse<StudentUpdateResponse, StudentUpdateRequest>> {
        return this.update(request);
    }

    getSectionsByUserId(userId: number): Promise<AxiosResponse<GetUserIdSectionResponse>> {
        const url = `${this.apiUrl}/studentsections/${userId}`;
        return axios.get<GetUserIdSectionResponse>(url)
    }

    getSkillsByUserId(userId: number): Promise<AxiosResponse<GetStudentSkillsResponse>> {
        const url = `${this.apiUrl}/skills/${userId}`;
        return axios.get<GetStudentSkillsResponse>(url)
            .catch(error => {
                throw new Error("Veriler yüklenirken bir hata oluştu.");
            });
    }

    // up
    getExamsByUserId(userId: number): Promise<AxiosResponse<GetStudentExamsResponse>> {
        const url = `${this.apiUrl}/exams/${userId}`;
        return axios.get<GetStudentExamsResponse>(url)
            .catch(error => {
                throw new Error("Veriler yüklenirken bir hata oluştu.");
            });
    }

    getCertificateByUserId(userId: number): Promise<AxiosResponse<GetStudentCertificateResponse>> {
        const url = `${this.apiUrl}/certificates/${userId}`;
        return axios.get<GetStudentCertificateResponse>(url)
            .catch(error => {
                throw new Error("Veriler yüklenirken bir hata oluştu.");
            });
    }

    getStudentUpdatePasswordByUserId(request: StudentUpdatePasswordRequest): Promise<AxiosResponse<GetStudentUpdatePassword>> {
        const url = `${this.apiUrl}/update-password`;
        return axios.post<GetStudentUpdatePassword>(url, request)
            .catch(error => {
                // AxiosError tipindeki hataları kontrol edin
                if (axios.isAxiosError(error)) {

                    if (error.response) {

                        const errorMessage = error.response.data || "";

                        if (typeof errorMessage === 'string' && errorMessage.includes("Current password is incorrect")) {
                            throw new Error("Eski şifre hatalı. Lütfen tekrar deneyin.");
                        } else {
                            // Diğer tüm HTTP hataları için genel bir mesaj
                            throw new Error("Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
                        }
                    } else if (error.request) {
                        // İstek yapıldı, ancak hiçbir yanıt alınamadı
                        throw new Error("API'ye bağlanılamıyor. Lütfen internet bağlantınızı kontrol edin.");
                    } else {
                        // İstek yapılamadan bir hata oluştu
                        throw new Error("Bir istek hatası oluştu: " + error.message);
                    }
                } else {
                    // Axios dışı bir hata oluştu
                    throw new Error("Bir hata oluştu: " + error.message);
                }
            });
    }


}

export default StudentService;
