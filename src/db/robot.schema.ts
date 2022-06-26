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
            type: {
                type: String,
                enum: ["Point"],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
    },
    {
        collection: "robot",
    },
);

robotSchema.index({ location: "2dsphere" });
export const RobotModel = model<IRobot>("Robot", robotSchema);
