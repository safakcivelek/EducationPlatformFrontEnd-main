export interface GetStudentExamUserAnswersDto {

    id: string;
    correctCount: number; 
    wrongCount: number;
    emptyCount: number;
    totalScore: number;
}