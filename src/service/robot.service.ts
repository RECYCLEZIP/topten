import { Robot } from "@src/repository/robot.repository";

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
        return robotsLocation;
    }
}
