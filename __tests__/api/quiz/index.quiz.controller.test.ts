import app from "@src/app";
import request from "supertest";
import { STATUS_200_OK } from "@src/utils/statusCode";

describe("Quiz API Test", () => {
    describe("GET /quizzes", () => {
        it("올바른 퀴즈타입을 담아 요청하면 해당 퀴즈목록을 반환한다.", async () => {
            const quizType = "ox";
            const res = await request(app).get(`/quizzes?${quizType}`);
            expect(res.statusCode).toBe(STATUS_200_OK);
        });

        it("잘못된 퀴즈타입을 담아 요청하면 빈 배열을 반환한다.", async () => {
            const quizType = "oxx";
            const res = await request(app).get(`/quizzes?${quizType}`).send([]);
            expect(res.body).toEqual([]);
        });
    });

    describe("GET /quizzes/wrong", () => {
        it("전날 기준 오답률 상위 3개 퀴즈정보를 반환한다.??", async () => {
            const res = await request(app).get("/quizzes/wrong");
            expect(res.statusCode).toBe(STATUS_200_OK);
        });
    });
});
