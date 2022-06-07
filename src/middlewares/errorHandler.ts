import { ErrorRequestHandler } from "express";

class RequestError extends Error {
    status: number;
    message: string;

    constructor(message = "잘못된 요청입니다.", status = 400) {
        super();
        this.status = status;
        this.message = message;
    }
}

const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
    const { status, message } = error;
    console.log("\x1b[33m%s\x1b[0m", error);
    res.status(status).json({ message });
};

export { errorMiddleware, RequestError };
