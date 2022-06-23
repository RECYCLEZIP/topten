import { RobotModel } from "@src/db/map/robot.schema";
import { GeoQuery } from "@src/models/interface";

export class Robot {
    static async findLocation(geoQuery: GeoQuery) {
        return await RobotModel.find(geoQuery);
    }
}
