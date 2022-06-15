import { IUser } from "@src/models/interface";
import { UserModel } from "@src/db/user/user.schema";

describe("USER 모델 접근", () => {
    const tempUser: IUser = {
        email: "test@test.com",
        username: "테스트유저",
        password: "test",
    };

    it("create는 유저 인스턴스를 생성한다.", async () => {
        const createdNews = new UserModel(tempUser);
        expect(createdNews.email).toEqual("test@test.com");
        expect(createdNews.username).toEqual("테스트유저");
        expect(createdNews.password).toEqual("test");
    });
});
