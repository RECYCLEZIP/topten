import { ErrorRequestHandler } from "express";
import { STATUS_500_INTERNALSERVERERROR, STATUS_400_BADREQUEST } from "./../utils/statusCode";

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
    console.log("\x1b[33m%s\x1b[0m", error);

    if (error instanceof RequestError) {
        const { status, message } = error;
        return res.status(status).json({ message });
    }

    if (error instanceof Error) {
        return res.status(STATUS_400_BADREQUEST).json({ message: error.message });
    }

    return res.status(STATUS_500_INTERNALSERVERERROR).json({ message: error.message });
};

export { errorMiddleware, RequestError };
