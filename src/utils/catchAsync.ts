import { RequestHandler } from "express";

const wrapAsyncFunc = (func: RequestHandler): RequestHandler => {
    return (req, res, next) => {
        try {
            func(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

export default wrapAsyncFunc;
