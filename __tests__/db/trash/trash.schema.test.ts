import { TrashModel } from "@src/db/trash/trash.schema";

describe("TrashModel 유효성 검사", () => {
    const tempTrash = {
        title: "제목",
        category: ["플라스틱"],
    };

    it("title과 category말고는 default값이 있다.", () => {
        const trash = new TrashModel(tempTrash);
        const error = trash.validateSync();
        expect(error).toBeUndefined();
    });
});
