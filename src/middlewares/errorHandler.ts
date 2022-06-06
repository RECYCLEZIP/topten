import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (error, req, res, _next) => {
    console.log("\x1b[33m%s\x1b[0m", error);
    res.status(400).send(error.message);
};

export { errorMiddleware };
