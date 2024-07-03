import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useSectionDetail } from "@/hooks/courseHook/courseDetail";
import { useLockSection } from "@/hooks/courseHook/lockSection";

interface CourseDetailSidebar {
    id: string;
}
const CourseDetailsSidebar: React.FC<CourseDetailSidebar> = ({ id }) => {
    const { sections, error } = useSectionDetail(id!);

    let total = 0;
    sections?.courses?.map((course) => (
        course?.lessons?.map((lesson) => (
            total++
        ))
    ))
    const [isOpen, setIsOpen] = useState(false); // Değişiklik
    const [videoUrl, setVideoUrl] = useState(''); // Değişiklik
  
    const openModal = (url) => {
const videoId = url.split('=')[1];
      setVideoUrl(videoId);
      setIsOpen(true); // Değişiklik
    };
  
    const closeModal = () => {
      setIsOpen(false); // Değişiklik
    };
  

    const { verify } = useLockSection();
    return (
        <>
            <div className="course-video-widget">
                <div className="course-widget-wrapper mb-30">
                    <div className="course-video-thumb w-img">

                        {sections?.imageUrl && (
                            <img
                                src={sections?.imageUrl}
                                style={{ width: "300", height: "auto" }}
                                alt="img not found"
                            />
                        )}
                        {sections?.courses?.slice(0, 1).map((course) => (
                            <div key={course.id} className="sidber-video-btn">
                                {course?.lessons?.slice(0, 1).map((lesson) => (
                                    <span key={lesson.id}
                                        className="popup-video"
                                        onClick={() => {
                                            openModal(lesson.videoUrl)
                                        }}
                                    >
                                        <i className="fas fa-play"></i>
                                    </span>

                                ))}
                            </div>
                        ))}
                    </div>
                    {verify?.sections?.some(x => x.id === id) ? (
                        <Link href={`/lesson/${sections?.id}`} className="custom-button-link">
                            <button className="custom-button">Kursu Görüntülemek İçin Tıklayınız</button>
                        </Link>
                    ) : (<div className="custom-button-link">
                    <button className="btn btn-secondary" style={{ pointerEvents: 'none', opacity: '0.6' }}>Kursu Görüntülemek İçin Tıklayınız</button>
                </div>)}


                    <div className="course-video-body">
                        <ul>
                            <li>

                                <div className="course-vide-icon">
                                    <i className="flaticon-computer"></i>
                                    <span>Ders Sayısı</span>
                                </div>

                                <div className="video-corse-info">

                                    <span>{total} Ders</span>
                                </div>



                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-menu-2"></i>
                                    <span>Kategori</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>{sections?.categoryName}</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-global"></i>
                                    <span>Dil</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>{sections?.languageName}</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-bookmark-white"></i>

                                    <span>Üretici Firma</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>{sections?.producerCompanyName}</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-clock"></i>

                                    <span>Tahmini Süre</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>{sections?.sectionAbout?.estimatedDuration} dk</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-book"></i>

                                    <span>Özet</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>{sections?.sectionAbout?.text}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ModalVideo
                isOpen={isOpen}
                videoId={videoUrl}
                onClose={() => setIsOpen(false)}
            />
      

        </>
    );
};

export default CourseDetailsSidebar;
