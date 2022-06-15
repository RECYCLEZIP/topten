import { IUser } from "@src/models/interface";
import { User } from "@src/repository/user.repository";
import { UserService } from "@src/service/user.service";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_400_BADREQUEST } from "@src/utils/statusCode";

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

describe("USER SERVICE ERROR HANDLING", () => {
    it("회원가입 시 이미 존재하는 이메일이 있으면 에러가 발생한다.", async () => {
        User.findByEmail = jest.fn().mockResolvedValue(tempUser);
        try {
            await UserService.addUser(tempUser);
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_400_BADREQUEST);
            expect(err.message).toBe("이미 사용중인 이메일입니다.");
        }
    });
});
