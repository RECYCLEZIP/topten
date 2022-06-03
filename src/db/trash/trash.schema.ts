import { Schema, model } from "mongoose";

const TrashSchema = new Schema({
    trashId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: Object,
        required: true,
        defualt: {},
    },
    image: {
        type: String,
        required: true,
    },
    recycle: {
        type: Boolean,
        required: true,
        default: false,
    },
    category: {
        type: String,
        required: true,
    },
});

export const TrashModel = model("Trash", TrashSchema);
