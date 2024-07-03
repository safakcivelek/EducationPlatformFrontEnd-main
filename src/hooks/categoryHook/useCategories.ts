import { CategoryModel } from "@/models/response/Category/CategoryModel"
import CategoryService from "@/services/categoryService";
import { useEffect, useState } from "react"

export const useCategories = () => {

    const [categories, setCategories] = useState<CategoryModel[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const categoryService = new CategoryService();
    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            try {
                const response = await categoryService.getAll();
                setCategories(response.data.items);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories};
   
};
