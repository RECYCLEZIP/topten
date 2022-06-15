import { IUser } from "@src/models/interface";
import { UserModel } from "@src/db/user/user.schema";

export class User {
    static create(userInfo: IUser) {
        return new UserModel(userInfo);
    }

    static async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    static async update(id: string, userInfo: Partial<IUser>) {
        return UserModel.findByIdAndUpdate(id, { $set: userInfo }, { new: true });
    }
}
