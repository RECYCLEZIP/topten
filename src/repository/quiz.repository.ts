import { QuizModel } from "@src/db/quiz/quiz.schema";
import { ToUpdate } from "@src/api/quiz/quiz.types";

export class Quiz {
    static async findByQuizType(quizType: string) {
        return await QuizModel.find({ type: quizType });
    }

    static async findQuizById(quizId: string) {
        return await QuizModel.findOne({ _id: quizId });
    }

    static async findQuizByWrongRate() {
        return await QuizModel.find({});
        // .sort({ yesterday: -1 }).limit(3);
    }

    // * 해당 타입의 문제셋의 answer 데이터만 조회
    static async findAnswerByQuizType(type: string) {
        return await QuizModel.find({ type }).select({ answer: 1, result: 1 });
    }

    static async updateQuizInfo(toUpdate: ToUpdate) {}
}
