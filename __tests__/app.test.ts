import app from "@src/app";
import request from "supertest";

describe("GET /", () => {
    it("AI Project 10 TEAM - TOPTEN 응답이 와야한다.", async () => {
        await request(app).get("/").expect("AI Project 10 TEAM - TOPTEN");
    });
});
