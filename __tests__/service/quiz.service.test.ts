import { Quiz } from "@src/db";
import { QuizService } from "@src/service/quiz.service";

describe("QuizService TEST", () => {
    let quizService;
    beforeAll(() => {
        quizService = new QuizService();
    });

    it("getQuizList: 타입에 해당하는 퀴즈 목록을 불러온다.", () => {
        const quizInfo = { type: "multipleChoice" };
        const getQuizList = jest.fn(() => {
            return quizInfo;
        });
    });
});
