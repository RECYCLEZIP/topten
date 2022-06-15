import { IUser } from "@src/models/interface";
import { UserModel } from "@src/db/user/user.schema";

export class User {
    static create(userInfo: IUser) {
        return new UserModel(userInfo);
    }

    static async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }
}
