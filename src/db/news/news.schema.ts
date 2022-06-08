import { Schema, model } from "mongoose";

interface News {
    url: string;
    title: string;
}

const NewsSchema = new Schema<News>({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

export const NewsModel = model<News>("News", NewsSchema);
