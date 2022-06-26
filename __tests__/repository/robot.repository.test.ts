import { RobotModel } from "@src/db";
import { Robot } from "@src/repository";

describe("Robot Ropository TEST", () => {
    it("findLocation : 좌표정보를 담아 요청하면 조건 반경 내의 로봇 위치정보를 반환한다.", async () => {
        const geoQuery = {
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [127, 37],
                    },
                    $maxDistance: 5000,
                },
            },
        };

        const spy = jest.spyOn(RobotModel, "find");
        await Robot.findLocation(geoQuery);
        expect(spy).toHaveBeenCalled();
    });
});
