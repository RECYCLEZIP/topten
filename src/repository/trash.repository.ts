import { ITrash } from "@src/utils/types/interface";
import { TrashModel } from "@src/db/trash/trash.schema";

export class Trash {
    static async findAll() {
        return await TrashModel.find();
    }

    static async create(trash: ITrash) {
        const createdTrash = await TrashModel.create(trash);
        return createdTrash;
    }

    static async update(id: string, trash: ITrash) {
        const updatedTrash = await TrashModel.findByIdAndUpdate(id, { $set: trash }, { new: true });
        return updatedTrash;
    }

    static async delete(id: string) {
        const deletedTrash = await TrashModel.findByIdAndDelete(id);
        return deletedTrash;
    }
}
