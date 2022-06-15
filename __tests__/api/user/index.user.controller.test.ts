import app from "@src/app";
import request from "supertest";
import { STATUS_201_CREATED } from "@src/utils/statusCode";
import { IUser } from "@src/models/interface";

describe("USER API", () => {
    const tempUser: IUser = {
        email: "test@test.com",
        username: "테스트유저",
        password: "testtest",
    };

    it("USER REGISTER 유저를 생성한다.", async () => {
        const res = await request(app).post("/users/register").send(tempUser);
        expect(res.status).toBe(STATUS_201_CREATED);
        expect(res.body).toHaveProperty("email");
        expect(res.body).toHaveProperty("username");
    });
});
