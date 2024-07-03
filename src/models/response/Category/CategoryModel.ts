import { SectionModel } from "../Section/SectionModel";

export interface  CategoryModel {
id:string;
name:string;
imageUrl:string;

section?:SectionModel[]; 
}


