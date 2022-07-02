import { TrashModel } from "@src/db";
import { ITrash, MongooseQuery } from "@src/models/interface";

export class Trash {
    static find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return TrashModel.find(filteredQuery).sort({ _id: -1 }).limit(limit);
    }

    static findOne(id: string) {
        return TrashModel.findById(id);
    }

    static create(trashInfo: ITrash) {
        return TrashModel.create(trashInfo);
    }

    static update(id: string, trashInfo: ITrash) {
        return TrashModel.findByIdAndUpdate(id, { $set: trashInfo }, { new: true });
    }

    static delete(id: string) {
        return TrashModel.findByIdAndDelete(id);
    }
}
