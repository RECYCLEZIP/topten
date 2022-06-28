import { UserModel } from "@src/db";
import { IUser } from "@src/models/interface";

export class User {
    static findById(id: string) {
        return UserModel.findById(id).select("-password");
    }

    static findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    static findByRanking() {
        return UserModel.find({}).sort({ topscore: -1 }).limit(10).select("-password");
    }

    static isEmailExist(email: string) {
        return UserModel.exists({ email });
    }

    static create(userInfo: IUser) {
        return UserModel.create(userInfo);
    }

    static update(id: string, userInfo: Partial<IUser>) {
        return UserModel.findByIdAndUpdate(id, { $set: userInfo }, { new: true }).select(
            "-password",
        );
    }

    static delete(id: string) {
        return UserModel.findByIdAndDelete(id).select("-password");
    }
}
