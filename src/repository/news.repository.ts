import { NewsModel } from "@src/db/news/news.schema";
import { INews, MongooseQuery } from "@src/models/interface";

export class News {
    static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return await NewsModel.find(filteredQuery).limit(limit);
    }

    static async create(newsInfo: INews) {
        const createdNews = await NewsModel.create(newsInfo);
        return createdNews;
    }

    static async update(id: string, newsInfo: INews) {
        const updatedNews = await NewsModel.findByIdAndUpdate(
            id,
            { $set: newsInfo },
            { new: true },
        );
        return updatedNews;
    }

    static async delete(id: string) {
        const deletedNews = await NewsModel.findByIdAndDelete(id);
        return deletedNews;
    }
}
