import { CommentModel } from "@src/db";
import { Schema, model } from "mongoose";
import { IPost } from "@src/models/interface";

const PostSchema = new Schema<IPost>(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true },
);

PostSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await CommentModel.deleteMany({ _id: { $in: doc.comments } });
    }
});

export const PostModel = model<IPost>("Post", PostSchema);
