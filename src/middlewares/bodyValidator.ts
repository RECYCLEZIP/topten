import { RequestHandler } from "express";
import { RequestError } from "@src/middlewares/errorHandler";

export const bodyValidator =
    (schema: any): RequestHandler =>
    (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const { status, message } = new RequestError("요청 데이터 형식이 옳바르지 않습니다.");
            return res.status(status).json({ message });
        }
        return next();
    };
