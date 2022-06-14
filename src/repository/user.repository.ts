import { UserModel } from "@src/db/user/user.schema";

export class User {
    static async find() {
        return UserModel.find({});
    }
}
