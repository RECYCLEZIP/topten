import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { IUser } from "@src/models/interface";

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

UserSchema.post("save", function (_doc) {
    const createdUser = this.toObject();
    delete createdUser.password;
    return createdUser;
});

export const UserModel = model<IUser>("User", UserSchema);
