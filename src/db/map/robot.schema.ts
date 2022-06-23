import { Schema, model } from "mongoose";
import { IRobot } from "@src/models/interface";

const robotSchema = new Schema<IRobot>(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        location: {
            type: { type: String, coordinates: [Number] },
            required: true,
        },
    },
    {
        collection: "robot",
    },
);

export const RobotModel = model<IRobot>("Robot", robotSchema);
