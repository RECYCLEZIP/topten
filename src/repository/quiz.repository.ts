import { QuizModel } from "@src/db/quiz/quiz.schema";
import { Result } from "@src/models/interface";

export class Quiz {
    static async findByQuizType(type: string) {
        return await QuizModel.find({ type });
    }

    static async findQuizById(quizId: string) {
        return await QuizModel.findById(quizId);
    }

    static async findQuizByWrongRate() {
        return await QuizModel.find({}).sort({ "result.yesterday": -1 }).limit(3);
    }

    static async findAnswerByQuizType(type: string) {
        return await QuizModel.find({ type }).select({ answer: 1 });
    }

    static async upsertQuizInfo(quizId: string, newResult: Result[] | Result) {
        await QuizModel.findOneAndUpdate({ _id: quizId }, { result: newResult }, { new: true });
    }
}
