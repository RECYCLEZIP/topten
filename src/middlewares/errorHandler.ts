import { NextFunction, Request, Response } from "express";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("\x1b[33m%s\x1b[0m", error);
    res.status(400).send(error.message);
};

export { errorMiddleware };
