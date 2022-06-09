import { Quiz } from "../db/index";

export class QuizService {
    constructor() {}
    async getQuizList(quizType: string) {
        return await Quiz.findByQuizType(quizType);
    }

    async getQuiz(quizId: string) {
        return await Quiz.findQuizById(quizId);
    }
}
