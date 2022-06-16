import bcrypt from "bcrypt";
import { User } from "@src/db";
import { Document } from "mongoose";
import { IUser } from "@src/models/interface";
import { RequestError } from "@src/middlewares/errorHandler";
import { createAccessToken, createRefreshToken } from "@src/utils/jwt";

const deletePassword = (mongooseObj: Document) => {
    const obj = mongooseObj.toObject();
    delete obj.password;
    return obj;
};

export class UserService {
    static async getByUser(id: string) {
        const foundUser = await User.findById(id);
        if (!foundUser) throw new RequestError("해당 사용자를 찾을 수 없습니다.");
        return foundUser;
    }

    static async addUser(userInfo: IUser) {
        const { email } = userInfo;
        const foundEmail = await User.findByEmail(email);
        if (foundEmail) throw new RequestError("이미 사용중인 이메일입니다.");

        const newUser = User.create(userInfo);
        await newUser.save();
        return deletePassword(newUser);
    }

    static async login(userInfo: IUser) {
        const { email, password: targetPassword } = userInfo;
        const foundUser = await User.findByEmail(email);
        if (!(foundUser?.password && targetPassword)) {
            throw new RequestError("이메일 또는 비밀번호를 확인해주세요.");
        }
        const isCheckedPassword = await bcrypt.compare(targetPassword, foundUser.password);
        if (!isCheckedPassword) throw new RequestError("이메일 또는 비밀번호를 확인해주세요.");

        const userId = foundUser._id.toString();
        const accessToken = createAccessToken(userId);
        const refreshToken = createRefreshToken();

        const user = await User.update(userId, { token: refreshToken });
        return { user, accessToken, refreshToken };
    }

    static async updateUser(id: string, userInfo: Partial<IUser>) {
        const updatedUser = await User.update(id, userInfo);
        if (!updatedUser) throw new RequestError("해당 사용자를 찾을 수 없습니다.");
        return updatedUser;
    }
}
