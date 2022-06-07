import { Request, Response } from "express";
import { errorMiddleware, RequestError } from "../../src/middlewares/errorHandler";

interface CustomError {
    name?: string;
    status: number;
    message: string;
}

const mockError = (message: string): Error => {
    return {
        name: "Error",
        message,
    };
};

const mockRequest = (): Request => {
    const req: unknown = jest.fn();
    return req as Request;
};

const mockResponse = (): Response => {
    const res: unknown = {
        status: jest.fn(() => res),
        send: jest.fn(),
    };
    return res as Response;
};

const mockNext = jest.fn();

describe("RequestError 클래스 테스트", () => {
    it("인스턴스 생성", () => {
        const err: CustomError = new RequestError("Permission Error", 403);
        expect(err.status).toBe(403);
        expect(err.message).toEqual("Permission Error");
    });

    it("인수 없이 인스턴스 생성", () => {
        const err: CustomError = new RequestError();
        expect(err.status).toBe(400);
        expect(err.message).toEqual("잘못된 요청입니다.");
    });
});

describe("에러 미들웨어 테스트", () => {
    const res = mockResponse();

    it("상태코드와 에러 메시지를 잘 응답한다.", () => {
        const err = mockError("에러 테스트");
        errorMiddleware(err, mockRequest(), res, mockNext);
        expect(res.status).toBeCalledWith(400);
    });
});
