import { UserModel } from "@src/db/user/user.schema";
import { IUser } from "@src/models/interface";

export class User {
    static async create(userInfo: IUser) {
        return new UserModel(userInfo);
    }
}
