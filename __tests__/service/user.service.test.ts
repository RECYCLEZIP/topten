import { IUser } from "@src/models/interface";
import { UserService } from "@src/service/user.service";

const tempUser: IUser = {
    email: "test@test.com",
    username: "테스트유저",
    password: "test",
};

describe("USER SERVICE LOGIC", () => {
    it("USER를 생성한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        expect(createdUser.email).toEqual("test@test.com");
        expect(createdUser.username).toEqual("테스트유저");
    });
});
