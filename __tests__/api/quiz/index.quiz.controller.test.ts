import app from "@src/app";
import request from "supertest";
import { STATUS_200_OK } from "@src/utils/statusCode";

describe("Quiz API Test", () => {
    describe("GET /quizzes", () => {
        it("올바른 퀴즈타입을 담아 요청하면 해당 퀴즈목록을 반환한다.", async () => {
            const quizType = "multipleChoice";
            await request(app).get("/quizzes").query({ type: quizType }).expect(200);
            // console.log(res.body);
            // expect(res.statusCode).toBe(STATUS_200_OK);
        });
    });

    //! 다시
    describe("GET /quizzes/wrong", () => {
        it("전날 기준 오답률 상위 3개 퀴즈정보를 반환한다.??", async () => {
            const res = await request(app).get("/quizzes/wrong");
            expect(res.statusCode).toBe(STATUS_200_OK);
        });
    });

    describe("GET /quizzes/:id", () => {
        it("quizId를 경로 파라미터로 요청하면 해당하는 퀴즈 정보를 반환한다.", async () => {
            const id = "62a455ad6059af946a56e715";
            const res = await request(app).get(`/quizzes/${id}`);
            expect(res.statusCode).toBe(STATUS_200_OK);
        });
    });

    describe("POST /quizzes/:id/submission", () => {
        // const quizResult = { isCorrect: true };

        it("채점하고자 하는 quiz의 id로 answer를 body에 담아 요청하면 채점결과를 반환한다.", async () => {
            // const id = "62a455ad6059af946a56e715";
            // const res = await request(app)
            //     .post(`/quizzes/${id}/submission`)
            //     .send({ isCorrect: true });
            // expect(res.statusCode).toBe(STATUS_200_OK);
            // expect(res.body).toEqual(quizResult);
        });
    });

    describe("POST /quizzes/submission", () => {
        it("채점하고자 하는 quizSet과 answers를 body에 담아 요청하면 채점결과를 반환한다.", async () => {});
    });
});
