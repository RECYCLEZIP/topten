import { Schema, model } from "mongoose";

const QuizSchema = new Schema({
    QuizId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
        defualt: [],
    },
    answer: {
        type: String,
        required: true,
    },
    result: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export const QuizModel = model("Quiz", QuizSchema);
