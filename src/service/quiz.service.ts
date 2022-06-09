import { Quiz } from "../db/index";
import { Submissions } from "../api/quiz/quiz.types";

export class QuizService {
    constructor() {}
    async getQuizList(quizType: string) {
        return await Quiz.findByQuizType(quizType);
    }

    async getQuiz(quizId: string) {
        return await Quiz.findQuizById(quizId);
    }

    // * 퀴즈셋 채점
    // * 1. 각 문제에 대한 정보 업데이트(totalUser, wrong)
    // * 2. 각 문제 채점 결과, 총점 데이터 리턴
    // * 3. Date가 바뀌면, result 초기화(new Date(), 0, 0, yesterday:어제 오답률)
    async getResult({ type, answers }: Submissions) {}
}
