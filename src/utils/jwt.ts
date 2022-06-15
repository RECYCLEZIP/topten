import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY;
const publicKey = process.env.JWT_PUBLIC_KEY;
if (!secretKey || !publicKey) throw new Error("SECRETKEY 또는 PUBLICKEY를 찾지 못했습니다.");

export const createAccessToken = (userId: string) => {
    return jwt.sign({ userId }, secretKey, { algorithm: "RS256", expiresIn: "1800s" });
};

export const createRefreshToken = () => {
    return jwt.sign({}, secretKey, { algorithm: "RS256", expiresIn: "14d" });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, publicKey);
    } catch (error: any) {
        return error.message;
    }
};

export const decodeToken = (token: string) => {
    return jwt.decode(token);
};
