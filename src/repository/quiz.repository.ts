import { QuizModel } from "@src/db/quiz/quiz.schema";

export class Quiz {
    static async findByQuizType(quizType: string) {
        return await QuizModel.find({ type: quizType });
    }
}
