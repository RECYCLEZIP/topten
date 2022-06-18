import { Schema, model } from "mongoose";
import { Answer } from "@src/models/interface";

interface Result {
    date: Date;
    totalUser: number;
    wrong: number;
    yesterday: number;
}

interface Quiz {
    title: string;
    description: string;
    options: string[];
    answer: string;
    result: Result[];
    type: string;
    image: string;
}

const QuizSchema = new Schema<Quiz>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            required: true,
            defualt: [],
        },
        answer: {
            type: String,
            required: true,
            enum: Object.values(Answer),
        },
        result: {
            type: [{ date: Date, totalUser: Number, wrong: Number, yesterday: Number }],
            required: true,
            default: [{ date: new Date(), totalUser: 0, wrong: 0, yesterday: 0 }],
        },
        type: {
            type: String,
            required: true,
            enum: ["multipleChoice", "mixUp", "ox"],
        },
        image: {
            type: String,
        },
    },
    {
        collection: "quiz",
    },
);

export const QuizModel = model<Quiz>("Quiz", QuizSchema);
