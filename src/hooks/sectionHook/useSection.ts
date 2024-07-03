import { useState, useEffect, useCallback } from 'react';
import { SectionModel } from '../../models/response/Section/SectionModel';
import SectionService from '../../services/sectionService';


interface UseSectionsHook {
    sections: SectionModel[];
    setSections: React.Dispatch<React.SetStateAction<SectionModel[]>>;
    isLoading: boolean;
    error: Error | null;
   
}

const useSections = (): UseSectionsHook => {
    const sectionService = new SectionService();

    const [sections, setSections] = useState<SectionModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchSections = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await sectionService.getAll();
            const newSections = response.data.items;
            setSections(newSections);
        } catch (errorInstance) {
            setError(errorInstance as Error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSections();
    }, [fetchSections]);

    return { sections, setSections, isLoading, error };
};

export default useSections;