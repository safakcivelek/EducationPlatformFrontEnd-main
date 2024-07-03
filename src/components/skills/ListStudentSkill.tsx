"use client";
import { useSelectSkill } from "@/hooks/skillHook/useSelectSkill";
import { useStudentSkill } from "@/hooks/skillHook/useStudentSkill";
import { GetStudentSkillListDto } from "@/models/response/Student";
import StudentSkillService from "@/services/studentSkillService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface StudentListSkillProps{
    reload:boolean;
    setReload:React.Dispatch<React.SetStateAction<boolean>>
}

const ListStudentSkill:React.FC<StudentListSkillProps> = ({reload,setReload}) => {
    const studentSkillService = new StudentSkillService();
    
    const { studentSkills, setStudentSkills,fetchStudentSkill } = useStudentSkill();
    useEffect(()=>{
      if(reload){
        fetchStudentSkill();
        setReload(false);
      }
  },[reload]);

    const DeleteSkill = async (id: string) => {
        try {
            await studentSkillService.delete(id);
            toast.success("Yetenek silindi.", {
                autoClose: 1000
            });
            setReload(true);
            if (studentSkills) {
              const updatedSkills:GetStudentSkillListDto[] = studentSkills.skills.filter(skill => skill.ssId !== id);
              setStudentSkills({ ...studentSkills, skills: updatedSkills });
             }
          } catch (error) {
            toast.success("Yetenek silinemedi.", {
                autoClose: 1500
            });
          }
        };
  return (
    <>
          <tbody>
              {studentSkills?.skills.map((skill, index) => (
                  <tr key={index}>
                      <td>{skill.name}</td>
                      <td>
                          <button className="delete-button" onClick={() => DeleteSkill(skill.ssId)}>
                              <i className="fas fa-trash-alt"></i>
                          </button>
                      </td>
                  </tr>
              ))}
          </tbody>
    </>
  );
};
export default ListStudentSkill;