import { useEffect, useState } from "react";

const ExamQuestionsTimer: React.FC<{ onTimeUp: () => void, time: number | undefined, id: string | undefined }> = ({ onTimeUp, time, id }) => {
    let examTime: number | undefined = time !== undefined ? time * 60 : 0;



    const [remainingTime, setRemainingTime] = useState<number>(examTime);

    useEffect(() => {
        let storedTime = null;
        if (typeof window !== 'undefined') {
            storedTime = localStorage.getItem(`examTime_${id}`);
        }


        if (storedTime) {
            examTime = parseInt(storedTime);
        } else {
            localStorage.setItem(`examTime_${id}`, (examTime || 0).toString());
        }
        // Sayfa yenilendiğinde zamanı kontrol et
        let storedStartTime = null;
        if (typeof window !== 'undefined') {
            storedStartTime = localStorage.getItem(`startTime_${id}`);
        }

        if (storedStartTime) {
            const startTime = parseInt(storedStartTime, 10);
            const currentTime = Math.floor(Date.now() / 1000);
            const elapsedTime = currentTime - startTime;
            const newRemainingTime = Math.max(examTime - elapsedTime, 0);
            setRemainingTime(newRemainingTime);
        } else {
            // İlk kez yüklendiğinde başlangıç zamanını kaydet
            localStorage.setItem(`startTime_${id}`, Math.floor(Date.now() / 1000).toString());
        }

        // Zamanlayıcıyı başlat
        const interval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime === 0) {
                    clearInterval(interval);
                    onTimeUp();
                    localStorage.removeItem(`examTime_${id}`);
                    return 0;
                }
                // Her saniyede kalan zamanı bir azalt
                const newTime = prevTime - 1;
                return newTime;
            });
        }, 1000);

        // Component unmount olduğunda interval'i temizle
        return () => clearInterval(interval);
    }, []); // Sadece bir kere çalıştır

    useEffect(() => {
        // remainingTime değiştiğinde localStorage'e güncel değeri kaydet
        localStorage.setItem(`examTime_${id}`, remainingTime.toString());
    }, [remainingTime, id]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <>
            <div>
                <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </div>
        </>
    );
};

export default ExamQuestionsTimer;
