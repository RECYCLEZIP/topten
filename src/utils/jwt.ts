import jwt from "jsonwebtoken";

export const createToken = (userId: string) => {
    if (!process.env.JWT_SECRET_KEY) throw new Error("SECRETKEY를 찾지 못했습니다.");
    const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1800s" });
    const refreshToken = jwt.sign({}, process.env.JWT_SECRET_KEY, { expiresIn: "14d" });
    return { accessToken, refreshToken };
};
