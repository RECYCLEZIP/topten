import { QuizModel } from "@src/db/quiz/quiz.schema";

export class Quiz {
    static async findByQuizType(quizType: string) {
        return await QuizModel.find({ type: quizType });
    }

    static async findQuizById(quizId: string) {
        return await QuizModel.findOne({ _id: quizId });
    }
}
