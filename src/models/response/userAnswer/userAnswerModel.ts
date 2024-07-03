export interface UserAnswerModel {
    id:string;
    userId:number;
    examId:string;
    correctCount?:number;
    wrongCount?:number;
    emptyCount?:number;
    totalScore?:number;

    }
    