import { QuizModel } from "@src/db/quiz/quiz.schema";
import { Result } from "@src/models/interface";

export class Quiz {
    static async findByQuizType(quizType: string) {
        return await QuizModel.find({ type: quizType });
    }

    static async findQuizById(quizId: string) {
        return await QuizModel.findOne({ _id: quizId });
    }

    static async findQuizByWrongRate() {
        return await QuizModel.find().sort({ yesterday: -1 }).limit(3);
    }

    static async findAnswerByQuizType(type: string) {
        return await QuizModel.find({ type }).select({ answer: 1, result: 1 });
    }

    static async updateQuizInfo(quizId: string, newResult: Result[] | Result) {
        await QuizModel.findOneAndUpdate({ _id: quizId }, { result: newResult }, { new: true });
    }
}
