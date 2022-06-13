import { Quiz } from "@src/db";
import { QuizService } from "@src/service/quiz.service";

describe("QuizService TEST", () => {
    const quizData = [
        { quizId: "1", type: "multipleChoice" },
        { quizId: "2", type: "multipleChoice" },
        { quizId: "3", type: "multipleChoice" },
    ];

    it("getQuizList: 타입에 해당하는 퀴즈 목록을 반환한다.", async () => {
        Quiz.findByQuizType = jest.fn().mockResolvedValue(quizData);
        const quizType = "multipleChoice";
        const res = await QuizService.getQuizList(quizType);
        expect(res).toEqual([
            { quizId: "1", type: "multipleChoice" },
            { quizId: "2", type: "multipleChoice" },
            { quizId: "3", type: "multipleChoice" },
        ]);
    });

    it("getQuiz: id와 일치하는 퀴즈정보를 반환한다.", async () => {
        Quiz.findQuizById = jest.fn().mockResolvedValue(quizData[0]);
        const id = "1";
        const res = await QuizService.getQuiz(id);
        expect(res).toEqual({ quizId: "1", type: "multipleChoice" });
    });

    it("getQuizByWrongRate: 오답률상위 3개 퀴즈정보를 반환한다.", async () => {
        Quiz.findQuizByWrongRate = jest.fn().mockResolvedValue(quizData);
        const res = await QuizService.getQuizByWrongRate();
        expect(res.length).toBe(3);
    });

    describe("getQuizResult TEST", () => {
        const quizId = "1";
        it("퀴즈정답을 가져와 채점결과를 반환한다. - 정답", async () => {
            const userAnswer = "1";
            const quizData = {
                id: "1",
                answer: "1",
                result: [{ date: new Date(), totalUser: 0, wrong: 0, yesterday: 0 }],
            };
            Quiz.findQuizById = jest.fn().mockResolvedValue(quizData);
            Quiz.updateQuizInfo = jest.fn();
            const res = await QuizService.getQuizResult(quizId, userAnswer);
            expect(res).toEqual({ isCorrect: true });
        });

        it("퀴즈정답을 가져와 채점결과를 반환한다. - 오답", async () => {
            const userAnswer = "2";
            const quizData = {
                id: "1",
                answer: "1",
                result: [{ date: new Date(), totalUser: 0, wrong: 0, yesterday: 0 }],
            };
            Quiz.findQuizById = jest.fn().mockResolvedValue(quizData);
            Quiz.updateQuizInfo = jest.fn();
            const res = await QuizService.getQuizResult(quizId, userAnswer);
            expect(res).toEqual({ isCorrect: false });
        });

        // it("quizId에 해당하는 퀴즈가 없으면 에러를 반환한다(!quiz).", async () => {
        //     Quiz.findQuizById = jest.fn().mockResolvedValue(null);
        //     const res = await QuizService.getQuizResult(quizId, answer);
        //     expect(async () => res).toThrow(`${quizId}에 해당하는 퀴즈 정보가 없습니다.`);
        // });
    });

    describe("getQuizSetResults TEST", () => {
        const requestBody = {
            type: "multipleChoice",
            answers: [
                {
                    quizId: "62a455ad6059af946a56e717",
                    answer: "1",
                },
                {
                    quizId: "62a455ad6059af946a56e715",
                    answer: "2",
                },
                {
                    quizId: "62a455ad6059af946a56e71b",
                    answer: "0",
                },
                {
                    quizId: "62a455ad6059af946a56e719",
                    answer: "3",
                },
            ],
        };
        it("퀴즈셋의 정답결과를 반환한다.", () => {});
    });
});
