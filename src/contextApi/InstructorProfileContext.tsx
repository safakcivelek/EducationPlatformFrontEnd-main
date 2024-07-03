import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Preloader from '../components/common/Preloader';
import { InstructorModel } from '@/models/response/Instructor/InstructorModel';
import { SectionModel } from '@/models/response/Section/SectionModel';


interface InstructorProfileContextType {
    instructorProfile: InstructorModel | null;
    setInstructorProfile: (profile: InstructorModel | null) => void;
    hasMore: boolean; // Daha fazla veri olup olmadığını kontrol eden flag
}

// Context için varsayılan değerler
const InstructorProfileContext = createContext<InstructorProfileContextType>({
    instructorProfile: null,
    setInstructorProfile: () => { },
    hasMore: true
});

// Provider komponenti için prop tipleri
interface InstructorProfileProviderProps {
    children: ReactNode;
    userId: number;
}

const InstructorProfileProvider: React.FC<InstructorProfileProviderProps> = ({ children, userId }) => {
    // Eğitmen profil bilgilerini tutan state
    const [instructorProfile, setInstructorProfile] = useState<InstructorModel | null>(null);
    // Yükleme durumunu kontrol eden state
    const [isLoading, setIsLoading] = useState(true);
    // Hata durumunu kontrol eden state
    const [error, setError] = useState<Error | null>(null);
    // Tüm sectionları saklamak için kullanılan state
    const [allSections, setAllSections] = useState<SectionModel[]>([]);
    // Sayfa başına gösterilecek öğe sayısı
    const itemsPerPage = 100;
    // Geçerli sayfa numarasını tutan state
    const [currentPage, setCurrentPage] = useState(1);
    // Daha fazla veri olup olmadığını kontrol eden state
    const [hasMore, setHasMore] = useState(true);

    // Component mount edildiğinde API'dan veri çeken useEffect hook'u
    useEffect(() => {
        const fetchInstructorProfile = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://tobetoapi.fatihsevencan.com/api/Instructors/by-instructor/${userId}`);

                if (!response.ok) {
                    throw new Error('Veri yüklenirken bir hata oluştu');
                }

                const data: InstructorModel = await response.json();
                setAllSections(data.sections.map(section => ({
                    ...section,
             
                    instructors: [], 
                }))); 

                // İlk sayfada gösterilecek sectionları ayarla
                setInstructorProfile({
                    ...data,
                    sections: data.sections.slice(0, itemsPerPage)
                });

                setHasMore(data.sections.length > itemsPerPage);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstructorProfile();
    }, [userId]); // Bu useEffect yalnızca userId değiştiğinde tetiklenir


    // Context değerlerini sağlayan object
    const contextValue = {
        instructorProfile,
        setInstructorProfile,
        hasMore
    };

    return (
        <InstructorProfileContext.Provider value={contextValue}>
            {isLoading ? <Preloader /> : error ? <p>Error: {error.message}</p> : children}
        </InstructorProfileContext.Provider>
    );
};

export const useInstructorProfile = () => useContext(InstructorProfileContext);
export { InstructorProfileContext, InstructorProfileProvider };