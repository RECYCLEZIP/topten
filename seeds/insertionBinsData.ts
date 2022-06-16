import * as fs from "fs";
import mongoose from "mongoose";
import "dotenv/config";
import { BinsModel } from "../src/db/map/bins.schema";

interface Bins {
    region: string;
    roads: string;
    details: string;
    points: string;
    address: string;
    type: string[];
    x: string;
    y: string;
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
                "/Users/yanghaechan/vscode_workspace/elice_project/ai-project/seeds/sample_location_data.json",
            );
            const binsData = JSON.parse(dataBuffer.toString());
            binsData.forEach(async (bins: Bins) => {
                const data = {
                    region: bins.region,
                    roads: bins.roads,
                    details: bins.details,
                    points: bins.points,
                    address: bins.address,
                    type: bins.type,
                    x: bins.x,
                    y: bins.y,
                };

                await BinsModel.create([data], { session });
            });

            console.log(`${BinsModel.length}개의 데이터를 정상적으로 저장했습니다.`);
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
