import { PostModel } from "@src/db/post/post.schema";
import { IPost, MongooseQuery } from "@src/models/interface";

export class Post {
    static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return PostModel.find(filteredQuery).sort({ _id: -1 }).limit(limit);
    }

    static async findById(id: string) {
        return PostModel.findById(id).populate("author");
    }

    static async create(postInfo: IPost) {
        return PostModel.create(postInfo);
    }

    static async update(id: string, postInfo: IPost) {
        return PostModel.findByIdAndUpdate(id, postInfo, { new: true });
    }

    static async delete(id: string) {
        return PostModel.findByIdAndDelete(id);
    }
}
