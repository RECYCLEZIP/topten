import { User } from "@src/db";
import { IUser } from "@src/models/interface";

export class UserService {
    static async addUser(userInfo: IUser) {
        const newUser = User.create(userInfo);
        return newUser.save();
    }
}
