import { Quiz } from "@src/repository";
import { QuizService } from "@src/service";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

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

    describe("getQuiz TEST", () => {
        const quizId = "1";
        it("id와 일치하는 퀴즈정보를 반환한다.", async () => {
            Quiz.findQuizById = jest.fn().mockResolvedValue(quizData[0]);
            const res = await QuizService.getQuiz(quizId);
            expect(res).toEqual({ quizId: "1", type: "multipleChoice" });
        });

        it("찾고자 하는 quizId와 일치하는 퀴즈가 없으면 에러를 반환한다.", async () => {
            try {
                Quiz.findQuizById = jest.fn().mockResolvedValue(null);
                await QuizService.getQuiz(quizId);
            } catch (err: any) {
                expect(err.status).toBe(STATUS_404_NOTFOUND);
                expect(err.message).toEqual(`${quizId}에 해당하는 퀴즈 정보가 없습니다.`);
            }
        });
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
            Quiz.upsertQuizInfo = jest.fn();
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
            Quiz.upsertQuizInfo = jest.fn();
            const res = await QuizService.getQuizResult(quizId, userAnswer);
            expect(res).toEqual({ isCorrect: false });
        });

        it("날짜가 다음날로 넘어간 경우, 퀴즈 통계정보를 초기화한다.", async () => {
            const today = new Date();
            const userAnswer = "1";
            const quizData = {
                id: "1",
                answer: "1",
                result: [
                    {
                        date: new Date(today.setDate(today.getDate() - 1)),
                        totalUser: 0,
                        wrong: 0,
                        yesterday: 0,
                    },
                ],
            };
            Quiz.findQuizById = jest.fn().mockResolvedValue(quizData);
            Quiz.upsertQuizInfo = jest.fn();
            const res = await QuizService.getQuizResult(quizId, userAnswer);
            expect(res).toEqual({ isCorrect: true });
        });

        it("quizId에 해당하는 퀴즈가 없으면 에러를 반환한다(!quiz).", async () => {
            const userAnswer = "2";
            Quiz.findQuizById = jest.fn().mockResolvedValue(null);
            try {
                await QuizService.getQuizResult(quizId, userAnswer);
            } catch (err: any) {
                expect(err.status).toBe(STATUS_404_NOTFOUND);
                expect(err.message).toEqual(`${quizId}에 해당하는 퀴즈 정보가 없습니다.`);
            }
        });
    });

    describe("getQuizSetResults TEST", () => {
        const requestBody = {
            type: "multipleChoice",
            answers: [
                {
                    quizId: "1",
                    answer: "1",
                },
                {
                    quizId: "2",
                    answer: "2",
                },
            ],
        };
        const quizAnswer = [
            {
                _id: "1",
                answer: "1",
            },
            {
                _id: "2",
                answer: "2",
            },
        ];

        it("퀴즈셋의 정답결과를 반환한다.", async () => {
            const { type, answers } = requestBody;
            Quiz.findAnswerByQuizType = jest.fn().mockResolvedValue(quizAnswer);
            const res = await QuizService.getQuizSetResults({ type, answers });
            expect(res.score).toBe(100);
            expect(res.result[0]).toEqual({
                quizId: "1",
                isCorrect: true,
            });
        });

        it("조회하고자 하는 quizId와 일치하는 퀴즈가 없는 경우, 에러를 반환한다.", async () => {
            const wrongRequestBody = {
                type: "multipleChoice",
                answers: [
                    {
                        quizId: "4",
                        answer: "1",
                    },
                    {
                        quizId: "2",
                        answer: "2",
                    },
                ],
            };

            try {
                const { type, answers } = wrongRequestBody;
                Quiz.findAnswerByQuizType = jest.fn().mockResolvedValue(quizAnswer);
                await QuizService.getQuizSetResults({ type, answers });
            } catch (err: any) {
                expect(err.status).toBe(STATUS_404_NOTFOUND);
            }
        });
    });
});
