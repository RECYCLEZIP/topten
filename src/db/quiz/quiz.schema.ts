import { Schema, model, Types } from "mongoose";

interface Result {
    date: Date;
    totalUser: number;
    wrong: number;
    yesterday: number;
}

interface Quiz {
    quizId: Types.ObjectId;
    title: string;
    options: string[];
    answer: string;
    result: Result[];
    type: string;
    image: string;
}

const QuizSchema = new Schema<Quiz>({
    quizId: {
        type: Schema.Types.ObjectId,
    },
    title: {
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
        enum: ["0", "1", "2", "3", "o", "x", "음식물", "일반"],
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
        required: true,
        default:
            "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
});

export const QuizModel = model<Quiz>("Quiz", QuizSchema);
