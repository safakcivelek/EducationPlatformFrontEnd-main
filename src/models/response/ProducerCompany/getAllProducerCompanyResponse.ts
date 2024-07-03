import { ProducerCompanyModel } from "./ProducerCompanyModel";

export interface GetAllProducerCompanyResponse{
    items: ProducerCompanyModel[];
    index: number;
    size: 0;
    count: number;
    pages: 10;
    hasPrevious: boolean;
    hasNext: boolean;
}