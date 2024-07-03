import { useState } from "react";
import { CourseModel } from "../../../models/response/Course/CourseModel";
import { LessonModel } from "../../../models/response/Lesson/LessonModel";
import axios from "axios";
import { toast } from "react-toastify";

interface CourseFormProps {
    sectionId: string;
 
}

const CourseForm: React.FC<CourseFormProps> = ({ sectionId }) => {

    const axiosInstance = axios.create({
        baseURL: 'https://tobetoapi.fatihsevencan.com/api'
    });


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

    const [courses, setCourses] = useState<CourseModel[]>([
        { id: '', totalTime: 0, name: '', lessons: [] },
    ]);
   

    const handleCourseNameChange = (index: number, name: string) => {
        const newCourses = [...courses];
        newCourses[index].name = name;
        setCourses(newCourses);
    };

    const handleAddCourse = () => {
        setCourses([...courses, { id: '', totalTime: 0, name: '', lessons: [] }]);
    };

    const handleLessonChange = (
        courseIndex: number,
        lessonIndex: number,
        key: keyof LessonModel,
        value: string | number
    ) => {
        const newCourses = [...courses];
        const lessons = newCourses[courseIndex].lessons as LessonModel[];
        const lesson = { ...lessons[lessonIndex], [key]: value };
        lessons[lessonIndex] = lesson;
        setCourses(newCourses);
    };

    const handleAddLesson = (courseIndex: number) => {
        const newCourses = [...courses];
        const lessons = newCourses[courseIndex].lessons as LessonModel[];
        lessons.push({ id: '', courseId: '', name: '', videoUrl: '', time: 0 });
        setCourses(newCourses);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isAllSuccess = true;

        for (const course of courses) {
            try {
                const courseResponse = await axiosInstance.post('/Courses', {
                    name: course.name,
                    sectionIds: [sectionId],
                    totalTime: course.totalTime || 10
                });

                if (courseResponse.status === 201) {
                    const courseId = courseResponse.data.id;
                    for (const lesson of course.lessons ?? []) {
                        const lessonResponse = await axiosInstance.post('/Lessons', {
                            courseId: courseId,
                            name: lesson.name,
                            videoUrl: lesson.videoUrl,
                            time: lesson.time
                        });

                        if (lessonResponse.status !== 201) {
                            isAllSuccess = false; 
                            console.error(`'${lesson.name}' dersi oluşturulamadı.`);
                            break; 
                        }
                    }
                } else {
                    isAllSuccess = false; 
                    console.error(`'${course.name}' kursu oluşturulamadı.`);
                    break; 
                }
            } catch (error) {
                isAllSuccess = false; 
                console.error('Kurs veya ders oluşturma sırasında hata meydana geldi', error);
                break; 
            }
        }

        if (isAllSuccess) {
            toast.success('Eğitim ekleme işlemi başarıyla tamamlandı.', {
                onClose: () => window.location.reload(), 
                autoClose: 1200 
            });
        } else {
            toast.error('Eğitim ekleme işlemi sırasında bazı hatalar meydana geldi.');
        }
    };

    

    return (
        <div className="main-container">
            <form onSubmit={handleSubmit}>
                {courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="course-section">
                        <div className="course-section-title">Kurs Adı</div>
                        <input
                            type="text"
                            className="form-course-input"
                            placeholder="Kurs Adı"
                            value={course.name}
                            onChange={(e) => handleCourseNameChange(courseIndex, e.target.value)}
                            required
                        />
                        {course.lessons?.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="lesson-section">
                                <div className="lesson-section-title">Ders {lessonIndex + 1}</div>
                                <div className="form-field">
                                    <label>Ders Adı</label>
                                    <input
                                        type="text"
                                        value={lesson.name}
                                        onChange={(e) => handleLessonChange(courseIndex, lessonIndex, 'name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Video URL</label>
                                    <input
                                        type="text"
                                        value={lesson.videoUrl}
                                        onChange={(e) => handleLessonChange(courseIndex, lessonIndex, 'videoUrl', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Süre (dakika)</label>
                                    <input
                                        type="number"
                                        value={lesson.time}
                                        onChange={(e) => handleLessonChange(courseIndex, lessonIndex, 'time', Number(e.target.value))}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <button type="button" className="add-button" onClick={() => handleAddLesson(courseIndex)}>
                           KURSA İÇERİK EKLE
                        </button>
                    </div>
                ))}
                <div className="button-container">
                    <button type="button" className="add-sectioncourses-button" onClick={handleAddCourse}>
                        YENİ Kurs Oluştur
                    </button>
                    <button type="submit" className="sectioncourses-save-button">Kaydet</button>
                </div>
            </form>
        </div>
    );
};

export default CourseForm;





