import { Trash } from "@src/db";
import { TrashModel } from "@src/db/trash/trash.schema";
import { Category, ITrash } from "@src/models/interface";

describe("Trash 모델 접근", () => {
    const tempTrash: ITrash = {
        title: "밀키스",
        description: {
            throwAway: ["버리는방법"],
            note: ["찌그러트려서 배출"],
        },
        kind: ["페트"],
        image: "http://",
        recycle: true,
        category: [Category.Plastic],
    };

    it("find는 모델에서 쓰레기목록을 찾는다.", async () => {
        const spyFn = jest.spyOn(TrashModel, "find");
        await Trash.find({ filteredQuery: {}, limit: 10 });
        expect(spyFn).toBeCalledTimes(1);
    });

    it("findOne은 모델에서 단일 쓰레기를 찾는다.", async () => {
        const spyFn = jest.spyOn(TrashModel, "findById");
        await Trash.findOne("62a1624d1458dc8c48ab52ca");
        expect(spyFn).toBeCalledTimes(1);
    });

    it("create는 쓰레기를 생성한다.", async () => {
        const createdTrash = await Trash.create(tempTrash);
        expect(createdTrash.title).toEqual("밀키스");
        expect(createdTrash.category[0]).toEqual("플라스틱");
    });

    it("update는 쓰레기를 수정한다.", async () => {
        const trash = await Trash.create(tempTrash);
        const updatedTrash = await Trash.update(trash._id.toString(), {
            ...tempTrash,
            title: "암바사",
        });
        expect(updatedTrash?.title).toEqual("암바사");
        expect(updatedTrash?.category[0]).toEqual("플라스틱");
    });

    it("쓰레기를 삭제한다.", async () => {
        const trash = await Trash.create(tempTrash);
        const deletedTrash = await Trash.delete(trash._id.toString());
        expect(deletedTrash?.title).toEqual("밀키스");
        expect(deletedTrash?.category[0]).toEqual("플라스틱");
    });
});
