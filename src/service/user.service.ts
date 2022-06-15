import { User } from "@src/db";
import { IUser } from "@src/models/interface";
import { RequestError } from "@src/middlewares/errorHandler";

export class UserService {
    static async addUser(userInfo: IUser) {
        const createdUser = await User.create(userInfo);
        if (!createdUser) throw new RequestError("뉴스 생성에 실패하였습니다.");
        return createdUser;
    }
}
