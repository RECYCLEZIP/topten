import { PostModel } from "@src/db";
import { IPost, IComment, MongooseQuery } from "@src/models/interface";

export class Post {
    static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
        return PostModel.find(filteredQuery)
            .sort({ _id: -1 })
            .limit(limit)
            .populate("author", "-password");
    }

    static async findById(id: string) {
        return PostModel.findById(id).populate("author", "-password");
    }

    static async create(postInfo: IPost) {
        return PostModel.create(postInfo);
    }

    static async updatePost(id: string, postInfo: IPost) {
        return PostModel.findByIdAndUpdate(id, postInfo, { new: true });
    }

    static async updateComment(postId: string, commentId: string, commentInfo: IComment) {
        return PostModel.findOneAndUpdate(
            { _id: postId, comments: { $elemMatch: { _id: commentId } } },
            { $set: { "comments.$.content": commentInfo.content } },
            { new: true },
        );
    }

    static async deletePost(id: string) {
        return PostModel.findByIdAndDelete(id);
    }

    static async deleteComment(postId: string, commentId: string) {
        return PostModel.findByIdAndUpdate(
            postId,
            { $pull: { comments: { _id: commentId } } },
            { new: true },
        );
    }
}
