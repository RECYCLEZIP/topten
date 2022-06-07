import { RequestHandler } from "express";

const wrapAsync = (func: RequestHandler): RequestHandler => {
    return (req, res, next) => {
        try {
            func(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

export default wrapAsync;
