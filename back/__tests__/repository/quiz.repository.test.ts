import { QuizModel } from "@src/db";
import { Quiz } from "@src/repository";

describe("Quiz Repository Test", () => {
    const quizType = "multipleChoice";
    const quizId = "62a455ad6059af946a56e717";

    it("findByQuizType TEST", async () => {
        const spy = jest.spyOn(QuizModel, "find");
        await Quiz.findByQuizType(quizType);
        expect(spy).toHaveBeenCalled();
    });

    it("findQuizById TEST", async () => {
        const spy = jest.spyOn(QuizModel, "findOne");
        await Quiz.findQuizById(quizId);
        expect(spy).toHaveBeenCalled();
    });

    it("findQuizByWrongRate TEST", async () => {
        const spy = jest.spyOn(QuizModel, "find");
        await Quiz.findQuizByWrongRate();
        expect(spy).toHaveBeenCalled();
    });

    it("findAnswerByQuizType TEST", async () => {
        const spy = jest.spyOn(QuizModel, "find");
        await Quiz.findAnswerByQuizType(quizType);
        expect(spy).toHaveBeenCalled();
    });

    it("upsertQuizInfo TEST", async () => {
        const newResult = {
            date: new Date(),
            totalUser: 1,
            wrong: 0,
            yesterday: 0,
        };

        QuizModel.findByIdAndUpdate = jest.fn();
        const spy = jest.spyOn(QuizModel, "findOneAndUpdate");
        await Quiz.upsertQuizInfo(quizId, newResult);
        expect(spy).toHaveBeenCalled();
    });
});
