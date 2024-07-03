import { useEffect, useState } from "react";
import { SkillModel } from "@/models/response/Skill/SkillModel";
import SkillService from "@/services/skillService";

export const useAllSkill = () => {

    const skillService = new SkillService();

    const [allSkills, setAllSkills] = useState<SkillModel[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchAllSkill = async () => {
            try {

                const responseAllSkill = await skillService.getAll();
                setAllSkills(responseAllSkill.data.items);

            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllSkill();

    }, []);

    return { allSkills, error, loading };

};