import { RobotModel } from "@src/db";
import { GeoQuery } from "@src/models/interface";

export class Robot {
    static findLocation(geoQuery: GeoQuery) {
        return RobotModel.find(geoQuery);
    }
}
