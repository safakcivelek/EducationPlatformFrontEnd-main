import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTokenUser } from '../userHook/tokenUser';
import SubscriptionService from '../../services/subscriptionService';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";


export const useSubscription = () => {
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [isCancelling, setIsCancelling] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useTokenUser();
    const router = useRouter();

    const subscriptionService = new SubscriptionService();


    const subscribe = async () => {
        if (!userId) {
            toast.error("Sadece üyeler abone olabilir.");
            router.push('/login');
            return;
        }

        setIsSubscribing(true);
       
        try {
            const classRoomTypeIdResponse = await axios.get(`https://tobetoapi.fatihsevencan.com/api/classRoomTypes/GetByUserId/${userId}`);
            const classRoomTypeId = classRoomTypeIdResponse.data.id;

            await subscriptionService.addSubscription({ userId, classRoomTypeId });
            toast.success("Teşekkürler! Artık kendi sınıfınızdaki en yeni eğitim içeriklerinden haberdar olacaksınız.", {
                autoClose: 6000
            });
            setTimeout(() => {
                window.location.reload();
            }, 6000);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverResponse = error.response;
                const errorMessage = serverResponse?.data?.Message || serverResponse?.data?.message || "Abonelik işlemi sırasında bir hata oluştu.";
                toast.error(errorMessage, {
                    autoClose: 6000
                });
            } else {
                toast.error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
            }
        } finally {
            setIsSubscribing(false);
        }
    };


    const cancelSubscription = async (subscriptionId: string) => {
        if (!userId) {
            toast.error("Sadece üyeler aboneliklerini iptal edebilir.");
            router.push('/login');
            return;
        }

        setIsCancelling(true);
        setIsLoading(true); 

        try {
            await subscriptionService.cancelSubscription(subscriptionId);
            setSubscription(null);
            toast.success("Aboneliğiniz başarıyla iptal edildi.", {
                autoClose: 4000
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverResponse = error.response;
                const errorMessage = serverResponse?.data?.Message || serverResponse?.data?.message || "Abonelik iptal işlemi sırasında bir hata oluştu.";
                toast.error(errorMessage, {
                    autoClose: 6000
                });
            } else {
                toast.error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
            }
        } finally {
            setIsCancelling(false);
            setIsLoading(false); 
        }
    };

    const getSubscriptionByUserId = async () => {

        if (!userId) {
            toast.error("Kullanıcı ID'si bulunamadı.");
            return;
        }

        try {
            const response = await subscriptionService.getSubscriptionByUserId(userId);
            setSubscription(response.data);

        } catch (error) {
            console.log("Abonelik bilgisi alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");

        };
    }



    return { subscribe, isSubscribing, cancelSubscription, isCancelling, subscription, isLoading, getSubscriptionByUserId };
};