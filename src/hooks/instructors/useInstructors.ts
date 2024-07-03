import { InstructorModel } from "@/models/response/Instructor/InstructorModel";
import InstructorService from "@/services/instructorService";
import { useEffect, useState } from "react";

export const useInstructors = () => {

    const [instructors, setInstructors] = useState<InstructorModel[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const instructorService = new InstructorService();
    useEffect(() => {
        const fetchInstructors = async () => {
            setIsLoading(true);
            try {
                const response = await instructorService.getAll();
                setInstructors(response.data.items);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstructors();
    }, []);

    return { instructors};
    // return { instructors, isLoading, error };
};
