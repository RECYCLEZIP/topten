import * as fs from "fs";
import mongoose from "mongoose";
import { RobotModel } from "../src/db/map/robot.schema";
import "dotenv/config";

interface RobotData {
    title: string;
    address: string;
    x: string;
    y: string;
}

const DB_URL =
    "mongodb+srv://topten:topten10@cluster0.nfefn.mongodb.net/green-DB?retryWrites=true&w=majority";
// process.env.MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다. env 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", async () => {
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL);

    const session = await mongoose.startSession();

    await session.withTransaction(async () => {
        try {
            const dataBuffer = fs.readFileSync(
                "/Users/yanghaechan/vscode_workspace/elice_project/ai-project/seeds/data/robots_location_data_final.json",
            );
            const robotData = JSON.parse(dataBuffer.toString());
            const robotDataList = robotData.map((data: RobotData) => {
                return {
                    name: data.title,
                    address: data.address,
                    location: {
                        type: "Point",
                        coordinates: [Number(data.y), Number(data.x)],
                    },
                };
            });

            await RobotModel.insertMany(robotDataList);

            console.log(`${robotDataList.length}개의 데이터를 정상적으로 저장했습니다.`);
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
