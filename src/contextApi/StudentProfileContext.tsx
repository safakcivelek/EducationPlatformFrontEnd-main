"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { StudentModel } from '../models/response/Student/StudentModel';
import Preloader from '../components/common/Preloader';
import { useTokenUser } from '../hooks/userHook/tokenUser';

interface StudentProfileContextType {
    studentProfile: StudentModel | null;
    setStudentProfile: (profile: StudentModel | null) => void;
}

const StudentProfileContext = createContext<StudentProfileContextType>({
    studentProfile: null,
    setStudentProfile: () => { },
});

interface StudentProfileProviderProps {
    children: React.ReactNode;
}

const StudentProfileProvider: React.FC<StudentProfileProviderProps> = ({ children }) => {
    const [studentProfile, setStudentProfile] = useState<StudentModel | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

  
    const { userId } = useTokenUser();

    useEffect(() => {
        if (!userId) return;

        const fetchStudentProfile = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://tobetoapi.fatihsevencan.com/api/Students/by-student/${userId}`);
                if (!response.ok) {
                    throw new Error('Student profile could not be loaded');
                }
                const data: StudentModel = await response.json();
                setStudentProfile(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudentProfile();
    }, [userId]);

    const contextValue = {
        studentProfile,
        setStudentProfile,
    };

    return (
        <StudentProfileContext.Provider value={contextValue}>
            {isLoading ? (
                <Preloader />
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                children
            )}
        </StudentProfileContext.Provider>
    );
};

// Bu hook, client-side code'da kullanıldığından emin olun.
export const useStudentProfile = () => useContext(StudentProfileContext);

export { StudentProfileContext, StudentProfileProvider };
