import { INews } from "@src/utils/types/interface";
import { NewsModel } from "@src/db/news/news.schema";

export class News {
    static async findAll() {
        return await NewsModel.find();
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
