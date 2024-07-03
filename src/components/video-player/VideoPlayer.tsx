
import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
    url: string;
    onVideoStart?: () => void;
    onVideoEnd?: () => void;
    onVideoPause?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onVideoStart, onVideoEnd, onVideoPause }) => {
    return (

        <ReactPlayer
            url={url}
            controls={true}
            onStart={onVideoStart}
            onEnded={onVideoEnd}
            onPause={onVideoPause}
            width='100%'
            height='100%'
        />

    );
};

export default VideoPlayer;