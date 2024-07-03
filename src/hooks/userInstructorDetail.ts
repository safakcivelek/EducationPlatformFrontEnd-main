import { useEffect, useState } from "react";
import InstructorService from "@/services/instructorService";
import { GetInstructorResponse } from "@/models/response/Instructor/getInstructorResponse";

const instructorService = new InstructorService();

export const useInstructorDetail = (id: number) => {
    const [instructorDetail, setInstructorDetail] = useState<GetInstructorResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchInstructorDetail = async () => {
            try {
                setIsLoading(true);
                const response = await instructorService.getById(id);
                setInstructorDetail(response.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchInstructorDetail();
        }
    }, [id]);

    return { instructorDetail, isLoading, error };
};