import React, { useState } from 'react';
import axios from 'axios';
import { useInstructorProfile } from '../../../contextApi/InstructorProfileContext';
import { toast } from 'react-toastify';
import { useCategories } from '../../../hooks/categoryHook/useCategories';
import { useClassRoomTypes } from '../../../hooks/classRoomTypeHook/useClassRoomTypes';
interface SectionFormProps {
    onNext: () => void;
    setSectionId: (id: string) => void;
}

const SectionForm: React.FC<SectionFormProps> = ({ onNext, setSectionId }) => {

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


    const { categories } = useCategories();
    const { instructorProfile } = useInstructorProfile();
    const { classRoomTypes } = useClassRoomTypes();
    const [previewImage, setPreviewImage] = useState<string | null>(null);


    const [section, setSection] = useState({
        categoryId: '',
        name: '',
        imageUrl: '',
        description: '',
        instructorId: '',
        courseIds: [],
        classRoomTypeIds: [],
    });

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (!file) {
            setPreviewImage(null);
            return;
        }

        // Önizleme resmi oluştur
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://tobetoapi.fatihsevencan.com/api/Images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setSection(prevSection => ({
                    ...prevSection,
                    imageUrl: response.data.imageUrl,
                }));
            } else {
                throw new Error('Resim yükleme başarısız.');
            }
        } catch (error) {
            console.error('Resim yükleme sırasında bir hata oluştu', error);
        }
    };


    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        if (name === "instructorIds" || name === "courseIds" || name === "classRoomTypeIds") {

            setSection((prevSection) => ({
                ...prevSection,
                [name]: value.split(',').map((id: string) => id.trim()),
            }));
        } else {
            // Diğer tüm inputlar için
            setSection((prevSection) => ({
                ...prevSection,
                [name]: value,
            }));
        }
    };

    const handleGeneralInfoSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const sectionToSubmit = {
            ...section,
            instructorIds: [instructorProfile?.id] 
        };

        try {
            const response = await axiosInstance.post('/Sections', sectionToSubmit);

            if (response.data) {
                setSectionId(response.data.id);
                onNext();
            } else {
                throw new Error('An unknown error occurred while creating the section');
            }
        } catch (error: any) { 
            console.error(error);
            let message = 'An error occurred while creating the section.';
           
            if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message;
            } else if (error.message) {
                message = error.message;
            }
            toast.error(message);
        }
    };


    return (

        <div className="form-container">

            <form onSubmit={handleGeneralInfoSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Eğitim Adı</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={section.name}
                        onChange={handleInputChange}
                        placeholder="Eğitim Adı"
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="description">Açıklama</label>
                    <textarea
                        id="description"
                        name="description"
                        value={section.description}
                        onChange={handleInputChange}
                        placeholder="Açıklama"
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="categoryId">Kategori</label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        value={section.categoryId}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Kategori Seçin</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="form-field image-upload-field">
                    <label htmlFor="imageUpload" className="image-upload-label">
                        Resim Yükle
                        {previewImage ? (
                            <img src={previewImage} alt="Önizleme" className="image-preview" />
                        ) : (
                            <div className="image-upload-placeholder">
                                <span>+</span>
                            </div>
                        )}
                        <input
                            id="imageUpload"
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </label>
                    <span className="image-size-recommendation">
                        *Resim boyutunun 600x600px olması önerilir.
                    </span>
                </div>

                <div className="form-field">
                    <label htmlFor="classRoomTypeIds">Sınıf</label>
                    <select
                        id="classRoomTypeIds"
                        name="classRoomTypeIds"
                        value={section.classRoomTypeIds}
                        onChange={handleInputChange}
                        multiple={true}
                    >
                        {classRoomTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="form-button">
                    Genel Bilgileri Kaydet  <span className="fas fa-arrow-right"></span>
                </button>
            </form>

        </div>

    );
};

export default SectionForm