import { Request, Response } from "express";
import { errorMiddleware, RequestError } from "../../src/middlewares/errorHandler";

const mockRequest = (): Request => {
    const req: unknown = jest.fn();
    return req as Request;
};

const mockResponse = (): Response => {
    const res: unknown = {
        status: jest.fn(() => res),
        send: jest.fn(),
        json: jest.fn((message) => ({ message })),
    };
    return res as Response;
};

const mockNext = jest.fn();

describe("RequestError 클래스는 에러를 생성한다.", () => {
    it("RequestError 인스턴스 생성", () => {
        const err = new RequestError("Permission Error", 403);
        expect(err.status).toBe(403);
        expect(err.message).toEqual("Permission Error");
    });

    it("인수 없이 RequestError 인스턴스 생성", () => {
        const err = new RequestError();
        expect(err.status).toBe(400);
        expect(err.message).toEqual("잘못된 요청입니다.");
    });
});

describe("에러 미들웨어는 응답으로 상태코드와 에러 메시지를 보낸다.", () => {
    const res = mockResponse();

    it("커스텀에러의 상태코드와 메시지를 응답한다.", () => {
        const err = new RequestError("페이지를 찾을 수 없습니다.", 404);
        errorMiddleware(err, mockRequest(), res, mockNext);
        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: "페이지를 찾을 수 없습니다." });
    });
});
