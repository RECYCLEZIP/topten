import { Trash } from "@src/db";
import { ITrash } from "@src/utils/types/interface";
import { trashService } from "@src/service/trash.service";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";
import { RequestError } from "@src/middlewares/errorHandler";

const tempTrash: ITrash = {
    title: "사이다",
    description: {
        throwAway: ["버리는방법"],
        note: ["찌그러트려서 배출"],
    },
    kind: ["캔"],
    image: "http://",
    recycle: true,
    category: ["캔"],
};

describe("TRASH SERVICE LOGIC", () => {
    it("TRASH 목록을 반환한다.", async () => {
        Trash.find = jest.fn().mockResolvedValue([tempTrash]);
        const trashList = await trashService.getTrashList({});
        expect(trashList).toHaveLength(1);
        expect(trashList[0].title).toEqual("사이다");
        expect(trashList[0].category[0]).toEqual("캔");
    });

    it("TRASH를 생성한다.", async () => {
        const createdTrash = await trashService.addTrash({ ...tempTrash, title: "환타" });
        expect(createdTrash.title).toEqual("환타");
        expect(createdTrash.category[0]).toEqual("캔");
    });

    it("TRASH를 수정한다.", async () => {
        const spyFn = jest.spyOn(Trash, "update");
        const newTrash = await trashService.addTrash(tempTrash);
        const updatedTrash = await trashService.updateTrash(newTrash._id.toString(), {
            ...tempTrash,
            image: "사이다이미지",
        });
        expect(spyFn).toBeCalledTimes(1);
        expect(updatedTrash?.title).toEqual("사이다");
        expect(updatedTrash?.image).toEqual("사이다이미지");
    });

    it("TRASH를 삭제한다.", async () => {
        const spyFn = jest.spyOn(Trash, "delete");
        const targetTrash = await trashService.addTrash(tempTrash);
        const deleteResult = await trashService.deleteTrash(targetTrash._id.toString());
        expect(spyFn).toBeCalledTimes(1);
        expect(deleteResult.message).toBe("삭제가 완료되었습니다.");
    });
});

describe("TRASH SERVICE ERROR HANDLING", () => {
    it("TRASH 목록이 null이나 undefined라면 에러를 발생시킨다.", async () => {
        Trash.find = jest.fn().mockResolvedValue(null);
        try {
            await trashService.getTrashList({});
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("쓰레기 목록을 가져올 수 없습니다.");
        }
    });

    it("TRASH 생성 시 생성된 쓰레기가 없으면 에러가 발생한다.", async () => {
        Trash.create = jest.fn().mockResolvedValue(null);
        try {
            await trashService.addTrash(tempTrash);
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("쓰레기 생성에 실패하였습니다.");
        }
    });

    it("TRASH 수정 시 쓰레기를 찾을 수 없으면 에러가 발생한다.", async () => {
        Trash.update = jest.fn().mockResolvedValue(null);
        try {
            await trashService.updateTrash("id", tempTrash);
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("해당 쓰레기를 찾을 수 없습니다.");
        }
    });

    it("TRASH 삭제 시 쓰레기를 찾을 수 없으면 에러가 발생한다.", async () => {
        Trash.delete = jest.fn().mockResolvedValue(null);
        try {
            await trashService.deleteTrash("id");
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("해당 쓰레기를 찾을 수 없습니다.");
        }
    });
});
