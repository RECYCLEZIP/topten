import { MongooseQuery, ITrash } from "@src/utils/types/interface";
import { TrashModel } from "@src/db/trash/trash.schema";

export class Trash {
    static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return await TrashModel.find(filteredQuery).limit(limit);
    }

    static async create(trashInfo: ITrash) {
        const createdTrash = await TrashModel.create(trashInfo);
        return createdTrash;
    }

    static async update(id: string, trashInfo: ITrash) {
        const updatedTrash = await TrashModel.findByIdAndUpdate(
            id,
            { $set: trashInfo },
            { new: true },
        );
        return updatedTrash;
    }

    static async delete(id: string) {
        const deletedTrash = await TrashModel.findByIdAndDelete(id);
        return deletedTrash;
    }
}
