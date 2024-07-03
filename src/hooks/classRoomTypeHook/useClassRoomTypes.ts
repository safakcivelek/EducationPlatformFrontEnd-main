import { useState, useEffect } from 'react';

import { ClassroomTypeModel } from '../../models/response/ClassroomType/ClassroomTypeModel';
import ClassroomTypeService from '../../services/classroomTypeService';




export const useClassRoomTypes = () => {
    const [classRoomTypes, setClassRoomTypes] = useState<ClassroomTypeModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const classroomTypeService = new ClassroomTypeService();

        const fetchClassRoomTypes = async () => {
            setIsLoading(true);
            try {
                const response = await classroomTypeService.getAll();
                setClassRoomTypes(response.data.items); 
            } catch (error: any) {
                setError(new Error(error.message || "Sınıf türleri yüklenirken bir hata oluştu."));
            } finally {
                setIsLoading(false);
            }
        };

        fetchClassRoomTypes();
    }, []);

    return { classRoomTypes, isLoading, error };
};