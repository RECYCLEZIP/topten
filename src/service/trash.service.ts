import { Trash } from "@src/db";
import { ITrash } from "@src/utils/types/interface";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

export class trashService {
    static async getTrashList() {
        const foundNewsList = await Trash.findAll();
        if (!foundNewsList)
            throw new RequestError("쓰레기 목록을 가져올 수 없습니다.", STATUS_404_NOTFOUND);
        return foundNewsList;
    }

    static async addTrash(trash: ITrash) {
        const createdTrash = await Trash.create(trash);
        if (!createdTrash)
            throw new RequestError("쓰레기 생성에 실패하였습니다.", STATUS_404_NOTFOUND);
        return createdTrash;
    }

    static async updateTrash(id: string, trash: ITrash) {
        const updatedTrash = await Trash.update(id, trash);
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
