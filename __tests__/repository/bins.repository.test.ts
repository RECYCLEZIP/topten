import { Bins } from "@src/db/index";
import { BinsModel } from "@src/db/map/bins.schema";

describe("Bins Repository TEST", () => {
    it("findLocation: filteredQuery 조건에 일치하는 데이터를 반환한다.", async () => {
        const filterQuery = [{ region: "종로구" }, { roads: "삼청로" }];
        const spy = jest.spyOn(BinsModel, "find");
        await Bins.findLocation(filterQuery);
        expect(spy).toHaveBeenCalled();
    });

    it("findAll: 모든 쓰레기통 위치정보 데이터를 조회한다.", async () => {
        const spy = jest.spyOn(BinsModel, "find");
        await Bins.findAll();
        expect(spy).toHaveBeenCalled();
    });
});
