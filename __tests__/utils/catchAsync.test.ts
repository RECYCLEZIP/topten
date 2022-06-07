import { RequestHandler, Request, Response } from "express";
import wrapAsyncFunc from "../../src/utils/catchAsync";

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

const req = mockRequest();
const res = mockResponse();
const mockNext = jest.fn();

describe("에러가 발생하면 에러를 캐치한다.", () => {
    let testValue = true;
    const mockCallback: RequestHandler = () => {
        if (testValue) throw new Error();
        return;
    };

    it("Request 콜백함수에서 에러가 발생하면 next 함수를 호출한다.", () => {
        wrapAsyncFunc(mockCallback)(req, res, mockNext);
        expect(mockNext).toBeCalledTimes(1);
    });

    it("Request 콜백함수가 정상 실행되면 next 함수가 호출되지 않는다.", () => {
        testValue = false;
        wrapAsyncFunc(mockCallback)(req, res, mockNext);
        expect(mockNext).toBeCalledTimes(0);
    });
});
