import { RequestHandler } from "express";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_401_UNAUTHORIZED } from "@src/utils/statusCode";
import { createAccessToken, createRefreshToken, verifyToken, decodeToken } from "@src/utils/jwt";
import { UserService } from "@src/service/user.service";

export const authRequired: RequestHandler = (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken)
        throw new RequestError("로그인이 필요한 서비스입니다.", STATUS_401_UNAUTHORIZED);

    const userToken = verifyToken(accessToken);
    const userRefreshToken = verifyToken(refreshToken);

    if (userToken !== "jwt expired" && userRefreshToken !== "jwt expired") return next();

    if (userToken === "jwt expired") {
        if (userRefreshToken === "jwt expired") {
            throw new RequestError("로그인이 필요한 서비스입니다.", STATUS_401_UNAUTHORIZED);
        }
        const { userId } = decodeToken(userToken) as { userId: string };
        const newAccessToken = createAccessToken(userId);
        res.cookie("accessToken", newAccessToken);
        req.cookies.accessToken = newAccessToken;
        return next();
    }

    if (userRefreshToken === "jwt expired") {
        const { userId } = decodeToken(userToken) as { userId: string };
        const newRefreshToken = createRefreshToken();
        UserService.updateUser(userId, { token: newRefreshToken }).then(() => {
            res.cookie("refreshToken", newRefreshToken);
            req.cookies.refreshToken = newRefreshToken;
            return next();
        });
    }

    throw new RequestError("인증에 실패하였습니다.", STATUS_401_UNAUTHORIZED);
};
