import { Trash } from "@src/db";
import { ITrash } from "@src/utils/types/interface";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";
import { RequestError } from "@src/middlewares/errorHandler";

export class trashService {
    static async getTrashList() {
        const foundTrashList = await Trash.findAll();
        if (!foundTrashList)
            throw new RequestError("쓰레기 목록을 가져올 수 없습니다.", STATUS_404_NOTFOUND);
        return foundTrashList;
    }

    static async addTrash(trashInfo: ITrash) {
        const createdTrash = await Trash.create(trashInfo);
        if (!createdTrash)
            throw new RequestError("쓰레기 생성에 실패하였습니다.", STATUS_404_NOTFOUND);
        return createdTrash;
    }

    static async updateTrash(id: string, trashInfo: ITrash) {
        const updatedTrash = await Trash.update(id, trashInfo);
        if (!updatedTrash)
            throw new RequestError("해당 쓰레기를 찾을 수 없습니다.", STATUS_404_NOTFOUND);
        return updatedTrash;
    }

    static async deleteTrash(id: string) {
        const deletedTrash = await Trash.delete(id);
        if (!deletedTrash)
            throw new RequestError("해당 쓰레기를 찾을 수 없습니다.", STATUS_404_NOTFOUND);
        return { message: "삭제가 완료되었습니다." };
    }
}
