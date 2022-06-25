import { Bins } from "@src/repository";
import { BinsService } from "@src/service/bins.service";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

describe("BinsService TEST", () => {
    const data = [
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
    ];
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

    describe("getBinsLocation TEST", () => {
        it("getBinsLocation: 조건에 맞는 쓰레기통 위치정보를 반환한다.", async () => {
            Bins.findLocation = jest.fn().mockResolvedValue(data);
            const query = { search: "종로구", category: "삼청로" };
            const res = await BinsService.getBinsLocation(query);
            expect(res[0].region).toEqual("종로구");
            expect(res[0].roads).toEqual("삼청로");
        });

        it("getBinsLocation: 존재하지 않는 지역명에는 에러를 반환한다.", async () => {
            Bins.findLocation = jest.fn().mockResolvedValue([]);
            const query = { search: "동작구" };
            try {
                await BinsService.getBinsLocation(query);
            } catch (err: any) {
                expect(err.status).toBe(STATUS_404_NOTFOUND);
                expect(err.message).toEqual("해당 조건에 일치하는 쓰레기통 위치정보가 없습니다.");
            }
        });
    });

    describe("getLocationList TEST", () => {
        it("유니크한 자치구 리스트와 유니크한 도로명 리스트를 하나의 객체에 담아 반환한다.", async () => {
            Bins.findAll = jest.fn().mockResolvedValue(datas);
            const res = await BinsService.getLocationList();
            expect(res).toHaveProperty("uniqueRegionList");
            expect(res).toHaveProperty("uniqueRoadList");
        });
    });
});
