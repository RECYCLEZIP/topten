import app from "@src/app";
import request from "supertest";
import { RobotModel } from "@src/db/map/robot.schema";
import { STATUS_200_OK } from "@src/utils/statusCode";

async function initializeDataBase() {
    const datas = [
        {
            location: {
                type: "Point",
                coordinates: [127.087316644307, 37.5886172687013],
            },
            _id: "62b4385656b6e08d18a09812",
            name: "중랑구 면목역공원(투명페트병/캔)",
            address: "서울 중랑구 면목동 120-30, 면목역 3번출구",
            __v: 0,
        },
        {
            location: {
                type: "Point",
                coordinates: [127.093510289011, 37.58923330814],
            },
            _id: "62b4385656b6e08d18a0978d",
            name: "세븐일레븐 면목엠비스점(투명페트병)",
            address: "서울 중랑구 상봉로 37",
            __v: 0,
        },
    ];

    await RobotModel.insertMany(datas);
}

describe("robotController TEST", () => {
    beforeEach(() => {
        initializeDataBase();
    });

    describe("GET /robot TEST", () => {
        it("x, y 쿼리스트링을 담아 요청하면 로봇 위치정보를 반환한다.", async () => {
            const queryString = { x: "127.087316644307", y: "37.5886172687013" };
            const res = await request(app).get("/robot").query(queryString);
            expect(res.statusCode).toEqual(STATUS_200_OK);
            expect(res.body.length).toBe(2);
            expect(res.body[0].name).toEqual("중랑구 면목역공원(투명페트병/캔)");
        });

        it("queryStringValidator : x, y 중 하나라도 queryString이 누락되면 에러를 반환한다.", async () => {
            const queryString = { x: "127.087316644307" };
            const res = await request(app).get("/robot").query(queryString);
            expect(res.body).toEqual({ message: "요청 데이터 형식이 옳바르지 않습니다." });
        });
    });
});
