import { CategoryModel } from "./CategoryModel";


// sayfalama da içerir
export interface GetAllCategoryPaginatedResponse{
    items: CategoryModel[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
