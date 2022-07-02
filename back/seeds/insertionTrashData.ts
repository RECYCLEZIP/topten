import * as fs from "fs";
import mongoose from "mongoose";
import "dotenv/config";
import { TrashModel } from "../src/db";
import { styrofoam } from "./data/styrofoamSeed";
import { can } from "./data/canSeed";
import { glass } from "./data/glassSeed";
import { plastic } from "./data/plasticSeed";

interface Trash {
    title: string;
    description: { throwAway: string[]; note: string[] };
    kind: string[];
    image: string;
    recycle: boolean;
    category: string[];
}

const trashData1 = [...styrofoam, ...can, ...glass, ...plastic];

const DB_URL =
    process.env.MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다. env 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () => {
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL);

    const session = await mongoose.startSession();

    await session.withTransaction(async () => {
        try {
            // 캔, 유리, 플라스틱, 스티로폼
            trashData1.forEach(async (trash: Trash) => {
                const data = {
                    title: trash.title,
                    description: trash.description,
                    image: trash.image,
                    kind: trash.kind,
                    recycle: trash.recycle,
                    category: trash.category,
                };

                await TrashModel.create([data], { session });
            });

            // 일반, 음식물, 비닐, 종이
            const dataBuffer = fs.readFileSync(
                "/Users/yanghaechan/vscode_workspace/elice_project/ai-project/seeds/restTrash.json",
            );
            const trashData2 = JSON.parse(dataBuffer.toString());
            trashData2.forEach(async (trash: Trash) => {
                const data = {
                    title: trash.title,
                    description: trash.description,
                    image: trash.image,
                    kind: trash.kind,
                    recycle: trash.recycle,
                    category: trash.category,
                };

                await TrashModel.create([data], { session });
            });

            console.log(`데이터를 정상적으로 저장했습니다.`);
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
