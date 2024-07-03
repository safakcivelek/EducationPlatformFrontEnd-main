import { BaseService } from './baseService';
import axios, { AxiosResponse } from 'axios';
import { BASE_API_URL } from "@/environment/environment";
import { AddContactRequestType } from '../models/request/Contact/AddContactRequest';

class ContactService extends BaseService<any, any, AddContactRequestType, void, any, any> {
    constructor() {
        super(BASE_API_URL + "contacts");
    }

    addContact(request: AddContactRequestType): Promise<AxiosResponse<void>> {
        return axios.post(this.apiUrl, request)
            .catch(error => {
                throw new Error("Mesaj gönderilirken bir hata oluştu: " + error.message);
            });
    }
}

export default ContactService;