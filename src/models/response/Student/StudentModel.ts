
import { GetStudentSectionListDto, GetStudentSurveyListDto, GetStudentSkillListDto, GetStudentCertificateListDto } from '.';

type ClassRoomName = string;

export interface StudentModel {
    id: number;
    userId: number;

    provinceId: number;
    districtId: number;

    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    birthDate?: string;
    phoneNumber?: string;
    biography?: string;
    githubUrl?: string;
    linkedinUrl?: string;

    sections?: GetStudentSectionListDto[]; 
    classRoomNames?: ClassRoomName[]; 
    surveys?: GetStudentSurveyListDto[];
    skills?: GetStudentSkillListDto[];
    certificates?: GetStudentCertificateListDto[];
    // kayıtlı kurslar içinde eğitmen de gelecek
}