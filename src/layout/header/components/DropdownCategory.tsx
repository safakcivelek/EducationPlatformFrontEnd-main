import Preloader from '@/components/common/Preloader';
import ErrorComponent from '@/components/errorPage/ErrorComponent';
import { GetAllCategoryResponse } from '@/models/response/Category/getAllCategoryResponse';
import CategoryService from '@/services/categoryService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const DropdownCategory = () => {
    const initialCategoriesState: GetAllCategoryResponse = {
        items: []      
    };
    
    const [categories, setCategories] = useState<GetAllCategoryResponse>(initialCategoriesState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const categoryService = new CategoryService();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(false)
                const response = await categoryService.getAll();
                setCategories(response.data)
            } catch (error) {
                setError(error as Error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, []);
    return (
        <div className="dropdown-category">
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <ErrorComponent error={error} />
            ) : (
                <nav>
                    <ul>

                        {categories.items.map((category) => (
                            <li key={category.id}>
                                <Link href={`/category-sections/${category.id}`}>
                                    {category.name}                                 
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            )}
        </div>
    );
};

export default DropdownCategory;