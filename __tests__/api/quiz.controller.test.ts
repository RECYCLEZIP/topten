import app from "@src/app";
import request from "supertest";
import { Types } from "mongoose";
import { QuizModel } from "@src/db";
import { QuizService } from "@src/service";
import { QuizType } from "@src/models/interface";
import { STATUS_200_OK } from "@src/utils/statusCode";

interface Result {
    date: Date;
    totalUser: number;
    wrong: number;
    yesterday: number;
}

interface Quiz {
    _id: Types.ObjectId;
    title: string;
    description: string;
    options: string[];
    answer: string;
    result: Result[];
    type: string;
    image: string;
}

async function initializeMemoryServer() {
    for (let i = 0; i < 3; i++) {
        const data = {
            title: `${i}번째 문제`,
            description:
                "폐의약품을 그냥 버릴 경우 환경오염을 일으킬 수 있다. 약국에 비치된 폐의약품 수거함에 버린다.",
            options: ["일반쓰레기로 버린다."],
            answer: "1",
            type: QuizType.MULTI,
            image: "test.image.url",
        };
        await QuizModel.create(data);
    }
    return QuizModel.find({ type: QuizType.MULTI });
}

describe("Quiz API Test", () => {
    let resData: Quiz[];
    beforeEach(async () => {
        resData = await initializeMemoryServer();
    });

    describe("GET /quizzes", () => {
        it("올바른 퀴즈타입을 담아 요청하면 해당 퀴즈목록을 반환한다.", async () => {
            const quizType = "multipleChoice";
            const res = await request(app).get("/api/quizzes").query({ type: quizType });
            expect(res.statusCode).toBe(STATUS_200_OK);
        });
    });

    describe("GET /quizzes/wrong", () => {
        it("전날 기준 오답률 상위 3개 퀴즈정보를 반환한다.", async () => {
            QuizService.getQuizByWrongRate = jest.fn().mockResolvedValue(resData);
            const res = await request(app).get("/api/quizzes/wrong");
            expect(res.statusCode).toBe(STATUS_200_OK);
            expect(res.body.length).toBe(3);
        });
    });

    it("GET /quizzes/game/:step 미니게임 이미지 데이터를 받는다.", async () => {
        const res = await request(app).get("/api/quizzes/game/1");
        expect(res.statusCode).toBe(STATUS_200_OK);
        expect(res.body).toHaveProperty("trash");
        expect(res.body).toHaveProperty("bins");
    });

    describe("GET /quizzes/:id", () => {
        it("quizId를 경로 파라미터로 요청하면 해당하는 퀴즈 정보를 반환한다.", async () => {
            QuizService.getQuiz = jest.fn().mockResolvedValue(resData[0]);
            const id = String(resData[0]._id);
            const res = await request(app).get("/api/quizzes/" + id);
            expect(res.statusCode).toBe(STATUS_200_OK);
            expect(res.body).toHaveProperty("title");
            expect(res.body).toHaveProperty("description");
            expect(res.body).toHaveProperty("type");
        });
    });

    describe("POST /quizzes/:id/submission", () => {
        it("채점하고자 하는 quiz의 id로 answer를 body에 담아 요청하면 채점결과를 반환한다.", async () => {
            const quizResult = { isCorrect: true };
            const res = await request(app)
                .post(`/api/quizzes/${resData[0]._id}/submission`)
                .send({ answer: "1" });
            expect(res.statusCode).toBe(STATUS_200_OK);
            expect(res.body).toEqual(quizResult);
        });
    });

    describe("POST /quizzes/submission", () => {
        it("채점하고자 하는 quizSet과 answers를 body에 담아 요청하면 채점결과를 반환한다.", async () => {
            const answers = resData.map((data) => {
                return {
                    quizId: String(data._id),
                    answer: data.answer,
                };
            });
            const requestBody = {
                type: "multipleChoice",
                answers,
            };
            const res = await request(app).post("/api/quizzes/submission").send(requestBody);
            expect(res.statusCode).toBe(STATUS_200_OK);
            expect(res.body.result.length).toBe(answers.length);
            expect(res.body).toHaveProperty("result");
            expect(res.body).toHaveProperty("score");
        });
    });
});
