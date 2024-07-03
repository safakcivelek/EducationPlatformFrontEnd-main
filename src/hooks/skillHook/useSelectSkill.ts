import { useEffect, useState } from "react";
import { useTokenUser } from "../userHook/tokenUser";
import { useAllSkill } from "./useAllSkill";
import { useStudentSkill } from "./useStudentSkill";
import { SkillModel } from "@/models/response/Skill/SkillModel";
import { StudentSkillsAddRequest } from "@/models/request/StudentSkill/StudentSkillsAddRequest";
import { GetStudentSkillsResponse } from "@/models/response/Student/getStudentSkillsResponse";

export const useSelectSkill = () => {

  const { userId } = useTokenUser();
  const { studentSkills} = useStudentSkill();
  

  const [selectedSkillId, setSelectedSkillId] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState<SkillModel[]>([]);
  
  const handleChange = (selectedSkills: any) => {
    setSelectedSkill(selectedSkills);
    setSelectedSkillId(selectedSkills.map((select: any) => select.value));

  }

  // Seçimleri temizleme fonksiyonu
const resetSelectData = () => {
  setSelectedSkill([]); // Seçili skilleri temizle
  setSelectedSkillId([]); // Seçili skill ID'lerini temizle
};

  const selectData: StudentSkillsAddRequest = {
    userId: userId,
    skills: selectedSkillId,
  };

  
 // Önce mevcut öğrenci yeteneklerini güncelle
    

  return { selectedSkill, selectData, handleChange,resetSelectData };

};