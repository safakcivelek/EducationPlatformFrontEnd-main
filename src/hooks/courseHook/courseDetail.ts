import { getSectionResponse } from "@/models/response/Section/getSectionResponse";
import SectionService from "@/services/sectionService";
import { useEffect, useState } from "react";



const sectionService = new SectionService();

export const useSectionDetail = (id: string) => {

  const [sections, setSections] = useState<getSectionResponse>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await sectionService.getById(id);
        setSections(response.data);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSections();
    }
  }, [id]);

  return { sections,error,setError,isLoading,setLoading};

};