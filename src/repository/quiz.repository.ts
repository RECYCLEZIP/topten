import { QuizModel } from "@src/db";
import { Result } from "@src/models/interface";

export class Quiz {
    static findByQuizType(type: string) {
        return QuizModel.find({ type });
    }

    static findQuizById(quizId: string) {
        return QuizModel.findById(quizId);
    }

    static findQuizByWrongRate() {
        return QuizModel.find({}).sort({ "result.yesterday": -1 }).limit(3);
    }

    static findAnswerByQuizType(type: string) {
        return QuizModel.find({ type }).select({ answer: 1 });
    }

    static async upsertQuizInfo(quizId: string, newResult: Result[] | Result) {
        await QuizModel.findOneAndUpdate({ _id: quizId }, { result: newResult }, { new: true });
    }
}
