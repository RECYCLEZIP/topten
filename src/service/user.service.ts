import { User } from "@src/db";
import { IUser } from "@src/models/interface";
import { RequestError } from "@src/middlewares/errorHandler";

export class UserService {
    static async addUser(userInfo: IUser) {
        const { email } = userInfo;
        const foundEmail = await User.findByEmail(email);
        if (foundEmail) throw new RequestError("이미 사용중인 이메일입니다.");
        const newUser = User.create(userInfo);
        return newUser.save();
    }
}
