import { authRequired } from "@src/middlewares/authRequired";
import { STATUS_401_UNAUTHORIZED } from "@src/utils/statusCode";
import { mockNext, mockRequest, mockResponse } from "@src/utils/setUpTests";
import { createAccessToken } from "@src/utils/jwt";

const res = mockResponse();
const next = mockNext();

describe("AUTH MIDDLEWARE", () => {
    it("accessToken이 없으면 에러가 발생한다.", () => {
        const req = mockRequest({}, {}, {});
        try {
            authRequired(req, res, next);
        } catch (err: any) {
            expect(err.status).toBe(STATUS_401_UNAUTHORIZED);
            expect(err.message).toEqual("로그인이 필요한 서비스입니다.");
        }
    });

    it("accessToken 검증에 실패하면 에러가 발생한다.", () => {
        const req = mockRequest({}, {}, { authorization: `Bearer token` });
        try {
            authRequired(req, res, next);
        } catch (err: any) {
            expect(err.status).toBe(STATUS_401_UNAUTHORIZED);
            expect(err.message).toEqual("인증에 실패하였습니다.");
        }
    });

    it("accessToken이 유효하다.", () => {
        const createdToken = createAccessToken("userId");
        const req = mockRequest({}, {}, { authorization: `Bearer ${createdToken}` }, {});
        authRequired(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});
