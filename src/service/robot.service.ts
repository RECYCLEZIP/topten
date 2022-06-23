import { Robot } from "@src/repository/robot.repository";

export class RobotService {
    static async getCloseRobots(x: string, y: string) {
        const geoQuery = {
            location: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [x, y],
                    },
                    $minDistance: 1000,
                    $maxDistance: 10000,
                },
            },
        };

        const robotsLocation = await Robot.findLocation(geoQuery);
        return robotsLocation;
    }
}
