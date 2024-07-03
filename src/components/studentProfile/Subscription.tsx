import React, { useEffect } from 'react';
import { useSubscription } from '../../hooks/subscriptionHook/useSubscription';


const Subscription = () => {
    const {
        subscription,
        isLoading,
        getSubscriptionByUserId,
        cancelSubscription
    } = useSubscription();

    useEffect(() => {
        getSubscriptionByUserId();
    }, []);


    const handleCancelSubscription = async () => {
        if (subscription && subscription.id) {
            await cancelSubscription(subscription.id);
        }
    };

    return (
        <>
            <div className="student-profile-reviews">
              
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : subscription ? (
                        <div className="student-profile-order custom-height-50">
                            <div>
                                <p>ID: <span className="subscription-id">{subscription.id}</span></p>
                                <p>Sınıf: <span className="subscription-class">{subscription.classRoomTypeName}</span></p>
                            </div>
                            <button type="button" className="subpage-btn cancel-subscription-btn" onClick={handleCancelSubscription}>
                                Aboneliğimi İptal Et
                            </button>
                        </div>
                    ) : (
                        <div className="no-subscription-info">
                            <div className="no-subscription-content">
                                <i className="fas fa-info-circle"></i>
                                <p>Henüz herhangi bir abonelik bilginiz bulunmamaktadır.</p>
                            </div>
                        </div>
                    )}
              
            </div>
        </>
    );
};

export default Subscription;


