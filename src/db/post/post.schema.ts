import { Schema, model } from "mongoose";
// import { INews } from "@src/models/interface";

const PostSchema = new Schema(
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
        comment: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true },
);

export const PostModel = model("Post", PostSchema);
