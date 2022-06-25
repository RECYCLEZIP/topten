import { TrashModel } from "@src/db";
import { Category } from "@src/models/interface";

describe("TrashModel 유효성 검사", () => {
    const tempTrash = {
        title: "제목",
        category: [Category.Plastic],
    };

    it("title과 category말고는 default값이 있다.", () => {
        const trash = new TrashModel(tempTrash);
        const error = trash.validateSync();
        expect(error).toBeUndefined();
    });
});
