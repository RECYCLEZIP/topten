import { IUser } from "@src/models/interface";
import { UserModel } from "@src/db/user/user.schema";

export class User {
    static async findById(id: string) {
        return UserModel.findById(id).select("-password");
    }

    static async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    static async create(userInfo: IUser) {
        return UserModel.create(userInfo);
    }

    static async update(id: string, userInfo: Partial<IUser>) {
        return UserModel.findByIdAndUpdate(id, { $set: userInfo }, { new: true }).select(
            "-password",
        );
    }

    static async delete(id: string) {
        return UserModel.findByIdAndDelete(id);
    }
}
