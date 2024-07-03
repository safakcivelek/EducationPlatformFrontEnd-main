import { Guid } from "guid-typescript";
import { ProducerCompanyModel } from "../ProducerCompany/ProducerCompanyModel";

export interface SectionAboutModel {
    id:string;
    producerCompanyId: string;
    sectionId: string;
    text?: string;
    estimatedDuration: number;
    //section: SectionModel[];
    producerCompany: ProducerCompanyModel[];
}