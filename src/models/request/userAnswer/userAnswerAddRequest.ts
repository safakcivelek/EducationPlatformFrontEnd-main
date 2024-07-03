export interface UserAnswerAddRequest {
    examId:string;
    userId:number;
    correctCount?:number;
    wrongCount?:number;
    emptyCount?:number;
    totalScore?:number;

}