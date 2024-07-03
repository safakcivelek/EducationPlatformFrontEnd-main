import { GetAllInstructorPaginateResponse } from "@/models/response/Instructor/getAllInstructorPaginateResponse";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "@/environment/environment";
import axios, { AxiosResponse } from "axios";
import { InstrcutorUpdateRequest } from "@/models/request/Instructor/InstrcutorUpdateRequest";
import { InstrcutorUpdateResponse } from "@/models/response/Instructor/instrcutorUpdateResponse";
import { InstructorUpdatePasswordRequest } from "@/models/request/Instructor/InstructorUpdatePassword";
import { GetInstructorUpdatePassword } from "@/models/response/Instructor/getInstructorUpdatePassword";

class InstructorService extends BaseService<GetAllInstructorPaginateResponse, any, any, any, InstrcutorUpdateRequest, InstrcutorUpdateResponse>  {
    constructor() {
        super(BASE_API_URL + "Instructors");
    }

    
    instrcutorUpdate(request: InstrcutorUpdateRequest): Promise<AxiosResponse<InstrcutorUpdateResponse, InstrcutorUpdateRequest>> {
        return this.update(request);
    }


    getInstrcutorUpdatePasswordByUserId(request: InstructorUpdatePasswordRequest): Promise<AxiosResponse<GetInstructorUpdatePassword>> {
        const url = `${this.apiUrl}/update-password`;
        return axios.post<GetInstructorUpdatePassword>(url, request)
            .catch(error => {
                // AxiosError tipindeki hataları kontrol edin
                if (axios.isAxiosError(error)) {
                    // Hatanın bir HTTP yanıtı içerip içermediğini kontrol edin
                    if (error.response) {
                        // Eski şifre hatalı olduğunda özel bir durum kodu kullanılıyorsa (örneğin 400),
                        // bu kodu kontrol edebilirsiniz
                        if (error.response.status === 500) {
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

export default InstructorService;

