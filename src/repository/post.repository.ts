import { PostModel } from "@src/db";
import { IPost, IComment, MongooseQuery } from "@src/models/interface";

export class Post {
    static count() {
        return PostModel.count({});
    }

    static find({
        filteredQuery,
        page,
        limit,
    }: {
        filteredQuery: MongooseQuery;
        page: number;
        limit: number;
    }) {
        return PostModel.find(filteredQuery)
            .sort({ createdAt: -1 })
            .skip(page)
            .limit(limit)
            .populate("author", "-password");
    }

    static findById(id: string) {
        return PostModel.findById(id).populate("author", "-password");
    }

    static create(postInfo: IPost) {
        return PostModel.create(postInfo);
    }

    static updatePost(id: string, postInfo: IPost) {
        return PostModel.findByIdAndUpdate(id, postInfo, { new: true });
    }

    static updateComment(postId: string, commentId: string, commentInfo: IComment) {
        return PostModel.findOneAndUpdate(
            { _id: postId, comments: { $elemMatch: { _id: commentId } } },
            { $set: { "comments.$.content": commentInfo.content } },
            { new: true },
        );
    }

    static deletePost(id: string) {
        return PostModel.findByIdAndDelete(id);
    }

    static deleteComment(postId: string, commentId: string) {
        return PostModel.findByIdAndUpdate(
            postId,
            { $pull: { comments: { _id: commentId } } },
            { new: true },
        );
    }
}
