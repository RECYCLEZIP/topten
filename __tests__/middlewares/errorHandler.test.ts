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
    it("RequestError의 인스턴스를 생성한다.", () => {
        const err = new RequestError("Permission Error", 403);
        expect(err.status).toBe(403);
        expect(err.message).toEqual("Permission Error");
    });

    it("인수 없이 RequestError 인스턴스를 생성한다.", () => {
        const err = new RequestError();
        expect(err.status).toBe(400);
        expect(err.message).toEqual("잘못된 요청입니다.");
    });
});

describe("에러 미들웨어는 응답으로 상태코드와 에러 메시지를 보낸다.", () => {
    const req = mockRequest();
    const res = mockResponse();

    it("RequestError의 상태코드와 메시지를 응답한다.", () => {
        const err = new RequestError("페이지를 찾을 수 없습니다.", 404);
        errorMiddleware(err, req, res, mockNext);
        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({ message: err.message });
    });

    it("에러 인스턴스가 아니면 상태코드 500을 응답한다.", () => {
        const err = { message: "서버OFF" };
        errorMiddleware(err, req, res, mockNext);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({ message: err.message });
    });

    it("일반 에러 인스턴스는 상태코드 500을 응답하지 않는다.", () => {
        const err = new Error("일반 에러 인스턴스");
        errorMiddleware(err, req, res, mockNext);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({ message: err.message });
    });

    it("RequestError 인스턴스는 상태코드 500을 응답하지 않는다.", () => {
        const err = new RequestError("커스텀 에러 인스턴스");
        errorMiddleware(err, req, res, mockNext);
        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({ message: err.message });
    });
});
