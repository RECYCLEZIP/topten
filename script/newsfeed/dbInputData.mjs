import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { NewsModel } from "../../dist/src/db/news/news.schema.js";
dotenv.config();

let exit = 0;
const DB_URL =
    process.env.MONGODB_URL ||
    "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";

mongoose.connect(DB_URL);

const insertData = async () => {
    const dataArr = fs
        .readFileSync(path.join(path.dirname(process.argv[1]), "./news.txt"), "utf-8")
        .toString()
        .trim()
        .split("\n");

    try {
        await NewsModel.deleteMany({});
        const newsArr = dataArr.map((item) => item.split("@"));
        for (let i = 0; i < newsArr.length; i++) {
            const [newsLink, newsTitle] = newsArr[i];
            const news = new NewsModel({ url: newsLink, title: newsTitle });
            await news.save();
            console.log(`${i} 저장`);
        }
        exit = 1;
    } catch (e) {
        console.log(e);
    }
};

insertData().then(() => {
    if (exit) throw new Error("저장 완료");
});
