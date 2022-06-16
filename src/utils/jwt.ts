import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY || "JWT_TOKEN";
const publicKey = process.env.JWT_PUBLIC_KEY || "JWT_TOKEN";
if (!secretKey || !publicKey) throw new Error("SECRETKEY 또는 PUBLICKEY를 찾지 못했습니다.");

export const createAccessToken = (userId: string) => {
    return jwt.sign({ userId }, secretKey, {
        algorithm: "RS256",
        expiresIn: "1800s",
        issuer: "분리수ZIP",
    });
};

export const createRefreshToken = () => {
    return jwt.sign({}, secretKey, { algorithm: "RS256", expiresIn: "14d", issuer: "분리수ZIP" });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, publicKey);
    } catch (error: any) {
        return error;
    }
};
