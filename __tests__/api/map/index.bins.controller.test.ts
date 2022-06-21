import app from "@src/app";
import request from "supertest";
import { STATUS_200_OK, STATUS_404_NOTFOUND } from "@src/utils/statusCode";
import { BinsModel } from "@src/db/map/bins.schema";

export async function initializeDataBase() {
    const datas = [
        {
            region: "종로구",
            roads: "삼청로",
            details: "자하문로1길 50-1",
            points: "상가지역",
            type: ["일반", "재활용"],
            address: "서울 종로구 자하문로1길 50-1",
            x: 126.9696800413,
            y: 37.5770099711,
        },
        {
            region: "종로구",
            roads: "삼청로",
            details: "자하문로1길 50-1",
            points: "상가지역",
            type: ["일반", "재활용"],
            address: "서울 종로구 자하문로1길 50-1",
            x: 126.9696800413,
            y: 37.5770099711,
        },
        {
            region: "용산구",
            roads: "원효로",
            details: "자하문로1길 50-1",
            points: "상가지역",
            type: ["일반", "재활용"],
            address: "서울 종로구 자하문로1길 50-1",
            x: 126.9696800413,
            y: 37.5770099711,
        },
    ];
    datas.forEach(async (data) => {
        await BinsModel.create(data);
    });
}

describe("binsController TEST", () => {
    beforeEach(async () => {
        initializeDataBase();
    });

    describe("GET /bins TEST", () => {
        it("검색 조건을 쿼리스트링에 담아 보내면 쓰레기통위치정보를 반환한다. - 조건 1개(자치구)", async () => {
            const res = await request(app).get("/bins").query({ search: "종로구" });
            expect(res.statusCode).toEqual(STATUS_200_OK);
            expect(res.body[0].region).toEqual("종로구");
        });

        it("검색 조건을 쿼리스트링에 담아 보내면 쓰레기통위치정보를 반환한다. - 조건 2개(자치구, 도로명)", async () => {
            const res = await request(app)
                .get("/bins")
                .query({ search: "용산구", category: "원효로" });
            expect(res.statusCode).toEqual(STATUS_200_OK);
            expect(res.body[0].region).toEqual("용산구");
            expect(res.body[0].roads).toEqual("원효로");
            expect(res.body.length).toBe(1);
        });

        it("존재하지 않는 지역명을 담은 쿼리를 보내면 에러를 반환한다.", async () => {
            const res = await request(app).get("/bins").query({ search: "동작구" });
            expect(res.status).toBe(STATUS_404_NOTFOUND);
            expect(res.body.message).toEqual("해당 조건에 일치하는 쓰레기통 위치정보가 없습니다.");
        });
    });

    describe("GET /bins/locations TEST", () => {
        it("GET 요청을 보내면 유니크한 자치구명과 도로명 리스트를 반환한다.", async () => {
            const res = await request(app).get("/bins/locations");
            expect(res.status).toBe(STATUS_200_OK);
            expect(res.body).toHaveProperty("uniqueRegionList");
            expect(res.body).toHaveProperty("uniqueRoadList");
        });
    });
});
