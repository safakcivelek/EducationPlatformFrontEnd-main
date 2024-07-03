import { useAllSkill } from "@/hooks/skillHook/useAllSkill";
import { useSelectSkill } from "@/hooks/skillHook/useSelectSkill";
import { useStudentSkill } from "@/hooks/skillHook/useStudentSkill";
import StudentSkillService from "@/services/studentSkillService";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

export interface StudentSelectSkillProps {
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectSkill: React.FC<StudentSelectSkillProps> = ({ reload, setReload }) => {
  const studentSkillService = new StudentSkillService();
  const { allSkills } = useAllSkill();
  const { studentSkills, setStudentSkills, studentService, userId,fetchStudentSkill} = useStudentSkill();
  const { selectedSkill, selectData, handleChange, resetSelectData } = useSelectSkill();

  const skillOptions:any = allSkills
      .filter((skill) => !studentSkills?.skills.some((studentSkill) => studentSkill.id === skill.id) && !selectedSkill.some((selected) => selected.id === skill.id))
      .map((skill) => ({
        value: skill.id,
        label: skill.name,
      }));

      useEffect(()=>{
        if(reload){
          fetchStudentSkill();
          setReload(false);
        }
    },[reload]);

  const submit = async () => {
    try {
      await studentSkillService.add(selectData);
        toast.success("Yetenek eklendi.", {
            autoClose: 1000
        });

      if (selectData) {
        const updatedStudentSkills = await studentService.getSkillsByUserId(userId);
        setStudentSkills(updatedStudentSkills.data);
        resetSelectData();
        setReload(true);
      }
    } catch (error) {
        toast.error("Yetenek eklenemedi.", {
            autoClose: 1500
        });
    }
  };

  return (
    <>
      <Select
        options={skillOptions}
        value={selectedSkill}
        onChange={handleChange}
        isMulti={true}
      />
      <button className="save-button" onClick={submit}>Kaydet</button>
    </>
  );
};

export default SelectSkill;