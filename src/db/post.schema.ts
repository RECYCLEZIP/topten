import { Schema, model } from "mongoose";
import { IComment, IPost } from "@src/models/interface";

const CommentSchema = new Schema<IComment>(
    {
        author: {
            _id: false,
            type: {
                userId: { type: String, required: true },
                username: { type: String, required: true },
            },
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

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
        comments: [CommentSchema],
    },
    { timestamps: true },
);

export const PostModel = model<IPost>("Post", PostSchema);
