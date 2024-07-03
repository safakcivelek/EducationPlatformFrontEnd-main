import { useTokenUser } from '@/hooks/userHook/tokenUser';
import { CheckLikeStatusRequest } from '@/models/request/Like/CheckLikeStatusRequest';
import LikeService from '@/services/likeService';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export interface LikeButtonProps {
    sectionId: string;
    sectionTotalLike: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ sectionId, sectionTotalLike }) => {

    const user = useTokenUser();
    const likeService = new LikeService();
    const [likeId, setLikeId] = useState(null); 
    const [isLikedState, setIsLikedState] = useState(false);
    const [likeCount, setLikeCount] = useState(sectionTotalLike || 0);

    const isDisabled = user.userRole !== 'Student';


    // Like durumunu kontrol et
    useEffect(() => {
        const checkLikeStatusRequest: CheckLikeStatusRequest = {
            userId: user.userId,
            sectionId: sectionId,
        };

        const fetchLikeStatus = async () => {
            try {
                const response = await likeService.checkLikeStatus(checkLikeStatusRequest);
                setIsLikedState(response.data.isLiked);
                setLikeId(response.data.id); 

            } catch (error) {
                console.error('Beğeni durumu kontrolü başarısız oldu:', error);
            }

        };
        fetchLikeStatus();
    }, [sectionId, user.userId]);


    const toggleLike = async () => {
        let newLikeCount = likeCount;

        if (isLikedState) {
            await likeService.delete(likeId);
            newLikeCount -= 1;
            setLikeId(null); 

        } else {
            const response = await likeService.addLike({
                userId: user.userId,
                sectionId: sectionId,
            });
            newLikeCount += 1;
            setLikeId(response.data.id);        
        }
        setIsLikedState(!isLikedState);
        setLikeCount(newLikeCount);
    };

    return (
        <div className="like-button-container">
            <button
                onClick={toggleLike}
                className={`like-button ${isDisabled ? 'disabled' : ''}`}
                disabled={isDisabled} 
            >
                {isLikedState ? (
                    <FaHeart className={`fa-heart ${isLikedState ? 'liked' : ''}`} />
                ) : (
                    <FaRegHeart className="fa-reg-heart" />
                )}
            </button>
            <span className={`like-count ${isLikedState ? 'liked' : ''}`}>{likeCount}</span>
        </div>
    );
};

export default LikeButton;