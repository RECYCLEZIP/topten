import { Schema, model } from "mongoose";

interface Bins {
    region: string;
    roads: string;
    details: string;
    points: string;
    address: string;
    type: string[];
    x: string;
    y: string;
}

const binsSchema = new Schema<Bins>(
    {
        region: {
            type: String,
            required: true,
        },
        roads: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
        points: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        type: {
            type: [String],
            required: true,
        },
        x: {
            type: String,
            required: true,
        },
        y: {
            type: String,
            required: true,
        },
    },
    {
        collection: "bins",
    },
);

export const BinsModel = model<Bins>("Bins", binsSchema);
