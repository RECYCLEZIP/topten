import { createFilterQuery } from "@src/utils/createQuery";
import { FilterQuery } from "@src/utils/types/interface";

describe("createFilterQuery", () => {
    const tempQuery: FilterQuery = { search: "검색어", category: "캔", page: "id", limit: 5 };
    const filterList = ["kind", "title", "category"];

    it("id, 검색과 카테고리가 있으면 쿼리의 길이는 3이다.", () => {
        const { filteredQuery, limit } = createFilterQuery(tempQuery, filterList);
        expect(filteredQuery.$and).toHaveLength(3);
        expect(limit).toBe(5);
    });

    it("page만 주지않으면 쿼리의 길이는 2이다.", () => {
        const { filteredQuery, limit } = createFilterQuery({ ...tempQuery, page: "" }, filterList);
        expect(filteredQuery.$and).toHaveLength(2);
        expect(limit).toBe(5);
    });

    it("category만 주면 쿼리의 길이는 1이다.", () => {
        const { filteredQuery, limit } = createFilterQuery({ category: "일반" }, filterList);
        expect(filteredQuery.$and).toHaveLength(1);
        expect(limit).toBe(10);
    });

    it("빈 객체를 인자로 주면 빈 객체가 반환된다.", () => {
        const { filteredQuery, limit } = createFilterQuery({}, filterList);
        expect(filteredQuery).not.toHaveProperty("$and");
        expect(limit).toBe(10);
    });
});
