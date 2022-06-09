import * as fs from "fs";
import mongoose, { Types } from "mongoose";
import "dotenv/config";
import { QuizModel } from "../src/db/quiz/quiz.schema";

interface Result {
    date: Date;
    totalUser: number;
    wrong: number;
    yesterday: number;
}

interface Quiz {
    title: string;
    description: string;
    options: string[];
    answer: string;
    result: Result[];
    type: string;
    image: string;
}

const DB_URL =
    process.env.MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다. env 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () => {
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL);

    const session = await mongoose.startSession();

    await session.withTransaction(async () => {
        try {
            const dataBuffer = fs.readFileSync(
                "/Users/yanghaechan/vscode_workspace/elice_project/ai-project/seeds/quiz.json",
            );
            const quizData = JSON.parse(dataBuffer.toString());
            quizData.forEach(async (quiz: Quiz) => {
                const data = {};

                await QuizModel.create([data], { session });
            });

            console.log(`${quizData.length}개의 데이터를 정상적으로 저장했습니다.`);
        } catch (error) {
            console.log(error);
            throw new Error(error as string);
        } finally {
            session.endSession();
        }
    });
});
db.on("error", (error) =>
    console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error),
);
