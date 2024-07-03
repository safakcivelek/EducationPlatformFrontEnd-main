import { Guid } from 'guid-typescript';
import axios, { AxiosResponse } from "axios";
type idType = number | Guid | string | string[];

const isUpdateRequest = true;

export class BaseService<
    GetAllType,
    GetByIdType,
    AddRequestType,
    AddResponseType,
    UpdateRequestType,
    UpdateResponseType
> {
    public apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getAll(page = "0", pageSize = "101"): Promise<AxiosResponse<GetAllType, any>> {
        const params = new URLSearchParams({ page, pageSize });
        return axios.get<GetAllType>(`${this.apiUrl}?${params}`);
    }

    getById(id: idType | undefined): Promise<AxiosResponse<GetByIdType, any>> {
        return axios.get<GetByIdType>(`${this.apiUrl}/${id}`)
            .catch(error => {
                throw new Error("Veriler getirilirken bir hata oluştu.(Base Service!)");
            });
    };

    add(
        request: AddRequestType
    ): Promise<AxiosResponse<AddRequestType, AddResponseType>> {
        return axios.post<any>(this.apiUrl, request);
    }

    update(
        request: UpdateRequestType
    ): Promise<AxiosResponse<UpdateResponseType, UpdateRequestType>> {
        const requestPathName = isUpdateRequest ? this.apiUrl + "/Update" : this.apiUrl;
        return axios.put<UpdateResponseType>(requestPathName, request);
    }

    delete(id: idType) {
        return axios.delete(`${this.apiUrl}/${id}`);
    }
}


