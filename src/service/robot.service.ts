import { RequestError } from "@src/middlewares/errorHandler";
import { Robot } from "@src/repository/robot.repository";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

export class RobotService {
    static async getCloseRobots(x: string, y: string) {
        const geoQuery = {
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [Number(x), Number(y)],
                    },
                    $maxDistance: 5000,
                },
            },
        };

        const robotsLocation = await Robot.findLocation(geoQuery);
        if (robotsLocation.length === 0) {
            throw new RequestError(
                "해당 반경 내 순환자원 회수로봇의 위치정보가 없습니다.",
                STATUS_404_NOTFOUND,
            );
        }
        return robotsLocation;
    }
}
