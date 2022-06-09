import { Quiz } from "../db/index";

export class QuizService {
    constructor() {}
    async getQuizList(quizType: string) {
        return await Quiz.findByQuizType(quizType);
    }
}
