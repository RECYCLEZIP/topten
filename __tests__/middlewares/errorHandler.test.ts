import { Request, Response } from "express";
import { errorMiddleware } from "../../src/middlewares/errorHandler";

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

describe("에러 미들웨어 테스트", () => {
    const res = mockResponse();

    it("상태코드와 에러 메시지를 잘 응답한다.", () => {
        const err = mockError("에러 테스트");
        errorMiddleware(err, mockRequest(), res, mockNext);
        expect(res.status).toBeCalledWith(400);
    });
});
