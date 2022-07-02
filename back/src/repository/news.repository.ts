import { NewsModel } from "@src/db";
import { INews, MongooseQuery } from "@src/models/interface";

export class News {
    static find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return NewsModel.find(filteredQuery).sort({ _id: 1 }).limit(limit);
    }

    static create(newsInfo: INews) {
        return NewsModel.create(newsInfo);
    }

    static update(id: string, newsInfo: INews) {
        return NewsModel.findByIdAndUpdate(id, { $set: newsInfo }, { new: true });
    }

    static delete(id: string) {
        return NewsModel.findByIdAndDelete(id);
    }
}
