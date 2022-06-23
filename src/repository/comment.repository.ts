import { IComment } from "@src/models/interface";
import { CommentModel } from "@src/db/comment/comment.schema";

export class Comment {
    static async create(commentInfo: IComment) {
        return CommentModel.create(commentInfo);
    }

    static async update(id: string, commentInfo: IComment) {
        return CommentModel.findByIdAndUpdate(id, commentInfo, { new: true });
    }

    static async delete(id: string) {
        return CommentModel.findByIdAndDelete(id);
    }
}
