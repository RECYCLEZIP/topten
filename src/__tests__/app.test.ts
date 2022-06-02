import app from "../app";
import request from "supertest";

describe("GET /", () => {
    it("AI Project 10 TEAM - TOPTEN 요청이 와야한다.", async () => {
        await request(app).get("/").expect("AI Project 10 TEAM - TOPTEN");
    });
});
