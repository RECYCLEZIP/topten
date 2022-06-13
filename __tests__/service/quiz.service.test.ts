import { Quiz } from "@src/db";
import { QuizService } from "@src/service/quiz.service";

describe("QuizService TEST", () => {
    const quizData = [
        { quizId: "1", type: "multipleChoice" },
        { quizId: "2", type: "multipleChoice" },
        { quizId: "3", type: "multipleChoice" },
    ];

    it("getQuizList: 타입에 해당하는 퀴즈 목록을 불러온다.", async () => {
        Quiz.findByQuizType = jest.fn().mockResolvedValue(quizData);
        const quizType = "multipleChoice";
        const res = await QuizService.getQuizList(quizType);
        expect(res).toEqual([
            { quizId: "1", type: "multipleChoice" },
            { quizId: "2", type: "multipleChoice" },
            { quizId: "3", type: "multipleChoice" },
        ]);
    });

    it("getQuiz: id와 일치하는 퀴즈정보를 불러온다.", async () => {
        Quiz.findQuizById = jest.fn().mockResolvedValue(quizData[0]);
        const id = "1";
        const res = await QuizService.getQuiz(id);
        expect(res).toEqual({ quizId: "1", type: "multipleChoice" });
    });

    it("getQuizByWrongRate: 오답률상위 3개 퀴즈정보를 불러온다.", async () => {
        Quiz.findQuizByWrongRate = jest.fn().mockResolvedValue(quizData);
        const res = await QuizService.getQuizByWrongRate();
        expect(res.length).toBe(3);
    });
});
