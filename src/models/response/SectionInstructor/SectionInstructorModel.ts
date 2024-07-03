import { Guid } from "guid-typescript";
import { SectionModel } from "../Section/SectionModel";
import { InstructorModel } from "../Instructor/InstructorModel";

export interface SectionInstructorModel {
    id: Guid
    sectionId: Guid
    instructorId: number
    // CreatedDate : Date
    // UpdateDate: Date
    section: SectionModel; 
    instructor: InstructorModel;
}

