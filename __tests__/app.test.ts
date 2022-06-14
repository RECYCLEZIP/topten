import app from "@src/app";
import request from "supertest";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

describe("GET /", () => {
    it("루트로 접속 시 swagger페이지로 리다이렉트 시킨다.", async () => {
        const res = await request(app)
            .get("/")
            .expect("Location", /swagger/);
        expect(res.redirect).toBe(true);
    });

    it("요청 경로를 찾을 수 없을 때 404 상태코드를 응답한다.", async () => {
        const res = await request(app).get("/notfound");
        expect(res.status).toBe(STATUS_404_NOTFOUND);
    });
});
