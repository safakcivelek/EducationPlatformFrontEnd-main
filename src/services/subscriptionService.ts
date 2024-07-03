import axios, { AxiosResponse } from 'axios';
import { BaseService } from './baseService';
import { BASE_API_URL } from '../environment/environment';
import { AddSubscriptionRequestType } from '../models/request/Subscription/AddSubscriptionRequestType';

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

// Client-side olduğunda ve window nesnesi mevcut olduğunda token'ı ayarlayın
if (typeof window !== "undefined") {
    axiosInstance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
}

class SubscriptionService extends BaseService<any, any, AddSubscriptionRequestType, any, any, any> {
    constructor() {
        super('Subscriptions'); 
    }

    addSubscription(request: AddSubscriptionRequestType): Promise<AxiosResponse<AddSubscriptionRequestType, any>> {
        return axiosInstance.post<AddSubscriptionRequestType>(`/Subscriptions`, request);
    }

    cancelSubscription(subscriptionId: string): Promise<AxiosResponse<any, any>> {
        return axiosInstance.delete(`/Subscriptions/${subscriptionId}`);
    }

    getSubscriptionByUserId(userId: string): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get(`/Subscriptions/users/${userId}/subscription`);
    }

}

export default SubscriptionService;