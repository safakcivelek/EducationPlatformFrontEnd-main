"use client"
import { SearchnModel } from "@/models/response/Search/SearchModel";
import { SectionModel } from "@/models/response/Section/SectionModel";
import SearchService from "@/services/searchService";
import { useEffect, useState } from "react";


const useSearchSections = (searchTerm: any, pageIndex = 0, pageSize = 10) => {
    const [searchedSections, setSearchedSections] = useState<SectionModel[]>([]);
    const [paginationInfo, setPaginationInfo] = useState({});
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const searchService: SearchService = new SearchService();

    useEffect(() => {
        const fetchData = async () => {           
            try {
                setIsLoading(true);
                const response = await searchService.getSearchSections(searchTerm, pageIndex, pageSize);
                setSearchedSections(response.data.items);
                setTotalResults(response.data.count);
                setPaginationInfo({
                    pages: response.data.pages,
                    currentPage: pageIndex,
                    hasNext: response.data.hasNext,
                    hasPrevious: response.data.hasPrevious
                });
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        if (searchTerm?.trim()) {
            fetchData();
        }
    }, [searchTerm, pageIndex, pageSize]);

    return { searchedSections, totalResults, ...paginationInfo, searchTerm, isLoading, error };
};

export default useSearchSections;
