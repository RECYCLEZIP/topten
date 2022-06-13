import { TrashModel } from "@src/db/trash/trash.schema";
import { MongooseQuery, ITrash } from "@src/utils/types/interface";

export class Trash {
    static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return await TrashModel.find(filteredQuery).limit(limit);
    }

    static async findOne(id: string) {
        return await TrashModel.findOne({ _id: id });
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
