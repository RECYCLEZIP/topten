import { Schema, model, Types } from "mongoose";

interface Trash {
    trashId: Types.ObjectId;
    title: string;
    description: { throwAway: string[]; note: string[] };
    kind: string[];
    image: string;
    recycle: boolean;
    category: string[];
}

const TrashSchema = new Schema<Trash>({
    trashId: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: { throwAway: [String], note: [String] },
        required: true,
        defualt: { throwAway: [], note: [] },
    },
    kind: {
        type: [String],
        required: true,
        default: [],
    },
    image: {
        type: String,
        required: true,
        default:
            "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    recycle: {
        type: Boolean,
        required: true,
        default: false,
    },
    category: {
        type: [String],
        required: true,
        enum: ["플라스틱", "스티로폼", "유리", "캔", "음식물", "일반", "종이", "비닐"],
    },
});

export const TrashModel = model<Trash>("Trash", TrashSchema);
