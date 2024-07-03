"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSectionDetail } from '../../hooks/courseHook/courseDetail';
import VideoPlayer from '../video-player/VideoPlayer';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTokenUser } from '../../hooks/userHook/tokenUser';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useStudentLessonLifecycle } from '../../hooks/studentlesson/useStudentLessonLifecycle';
import { useLockSection } from '@/hooks/courseHook/lockSection';
import Preloader from "../common/Preloader";
import ErrorPageMain from '../404-page/ErrorPageMain';
import LikeButton from '../like/LikeButton';

export interface CourseContentProps {
    id: string;
}

const CourseContentPage: React.FC<CourseContentProps> = ({ id }) => {
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");
    const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
    const { sections, isLoading } = useSectionDetail(id);
    const { verify } = useLockSection();
    const user = useTokenUser();

    const {
        handleVideoStart,
        handleVideoEnd,
        completedLessons,
        loading,
        error
    } = useStudentLessonLifecycle(user.userId, currentLessonId ?? "");


    useEffect(() => {
        // `courses` ve `lessons` dizisinin var olup olmadığını kontrol et
        const courses = sections?.courses ?? [];
        const lessons = courses[0]?.lessons ?? [];

        if (courses.length > 0 && lessons.length > 0) {
            // İlk dersin video URL'sini ve ID'sini seç
            const firstLesson = lessons[0];
            selectVideo(firstLesson.videoUrl, firstLesson.id);
        }
    }, [sections]);

    const selectVideo = (videoUrl: string, lessonId: string) => {
        try {
            const urlObj = new URL(videoUrl);
            const urlParams = new URLSearchParams(urlObj.search);
            const videoId = urlParams.get('v');


            if (!videoId) {
                console.error('Invalid video URL');
                setCurrentVideoUrl("");
                setCurrentLessonId(null);
                return;
            }
            const videoBaseURL = "https://www.youtube.com/watch?v=";
            const videoURL = videoBaseURL + videoId;
            setCurrentVideoUrl(videoURL);
            setCurrentLessonId(lessonId);
        } catch (error) {

            console.error('Error parsing video URL', error);
            setCurrentVideoUrl("");
            setCurrentLessonId(null);
        }
    };


    const isLessonCompleted = (lessonId: string) => {
        return completedLessons.some((lesson) => lesson.lessonId === lessonId && lesson.isCompleted);
    };

    let totalLessonsCount = 0;
    let completedLessonsCount = 0;

    sections?.courses?.forEach(course => {
        course.lessons?.forEach(lesson => {
            totalLessonsCount++;
            if (isLessonCompleted(lesson.id)) {
                completedLessonsCount++;
            }
        });
    });

    const completionRate = Math.round((completedLessonsCount / totalLessonsCount) * 100);

    return (

        <div className='container'>
            {isLoading ? (
                <Preloader />
            ) : verify?.sections?.some(x => x.id === id) ? (
                <>
                    <div className='row mb-40'>
                        <div>
                            <div className="section-title-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {/* Sol taraftaki başlık */}
                                <div className="section-title pt-40">
                                    <h4 className="title"><strong>{sections?.name}</strong></h4>
                                </div>

                                {/* Sağ taraftaki LikeButton */}
                                <div className='mt-30'>
                                    <h2><LikeButton sectionId={id} sectionTotalLike={sections.totalLike} /></h2>
                                </div>
                            </div>

                            <div
                                className="progress"
                                style={{ height: '30px' }}
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow={completionRate}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div className="progress-bar" style={{ width: `${completionRate}%`, background: 'linear-gradient(to right, #2ddfff, #b7df2d)' }}>{completionRate}%</div>
                            </div>
                        </div>
                    </div>
                    <div className='row pt-40' style={{ background: '#f0f2f5' }}>
                        <div className="col-4 course-content-page">
                            <div className="sidebar">
                                <div className="course-curriculum">
                                    <div className="course-curriculam-accodion">
                                        <div className="accordion" id="accordionExample">
                                            {sections?.courses?.map((course, index) => (
                                                <div className="accordion-item" key={index}>
                                                    <div className="accordion-header" id={`heading${index}`}>
                                                        <button
                                                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${index}`}
                                                            aria-expanded="true"
                                                            aria-controls={`collapse${index}`}
                                                        >
                                                            <span className="accordion-header">
                                                                <span className="accordion-tittle">
                                                                    <span>{course.name}</span>
                                                                </span>
                                                                <span className="accordion-tittle-inner">

                                                                    <span style={{ marginLeft: "10px" }}>{course.lessons?.length} Ders</span>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div
                                                        id={`collapse${index}`}
                                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                        aria-labelledby={`heading${index}`}

                                                    >
                                                        <div className="accordion-body">
                                                            {course?.lessons?.map((lesson) => (
                                                                <div
                                                                    className="course-curriculum-content d-sm-flex justify-content-between align-items-center"
                                                                    key={lesson.id}
                                                                    onClick={() => selectVideo(lesson.videoUrl, lesson.id)}
                                                                >
                                                                    <div className="course-curriculum-info">
                                                                        <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#2268eb" }} />
                                                                        <h4>{lesson.name}</h4>
                                                                    </div>
                                                                    <div className="course-curriculum-meta">

                                                                        {isLessonCompleted(lesson.id) && (
                                                                            <FontAwesomeIcon icon={faCheckCircle} size="lg" style={{ color: "green" }} />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 video-container" >

                            {currentVideoUrl && (

                                <VideoPlayer
                                    url={currentVideoUrl}
                                    onVideoStart={handleVideoStart}
                                    onVideoEnd={handleVideoEnd}
                                />
                            )}
                        </div>

                    </div>

                </>

            ) : (
                < ErrorPageMain />
            )}


        </div>

    );
};


export default CourseContentPage;