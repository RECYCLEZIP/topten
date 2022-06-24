import { Robot } from "@src/db";
import { RobotService } from "@src/service/robot.service";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

describe("RobotService TEST", () => {
    const x = "127";
    const y = "37";
    const resultData = [
        {
            location: {
                type: "Point",
                coordinates: [127.087316644307, 37.5886172687013],
            },
            _id: "62b4385656b6e08d18a09812",
            name: "중랑구 면목역공원(투명페트병/캔)",
            address: "서울 중랑구 면목동 120-30, 면목역 3번출구",
            __v: 0,
        },
    ];

    it("getCloseRobots : 조건에 맞는 로봇 위치정보 리스트를 반환한다.", async () => {
        Robot.findLocation = jest.fn().mockResolvedValue(resultData);
        const res = await RobotService.getCloseRobots(x, y);
        expect(res[0].name).toEqual("중랑구 면목역공원(투명페트병/캔)");
        expect(res[0].address).toEqual("서울 중랑구 면목동 120-30, 면목역 3번출구");
    });

    it("getCloseRobots : db에서 조회한 결과가 빈 리스트인 경우 에러를 반환한다.", async () => {
        Robot.findLocation = jest.fn().mockResolvedValue([]);
        try {
            await RobotService.getCloseRobots(x, y);
        } catch (err: any) {
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toEqual("해당 반경 내 순환자원 회수로봇의 위치정보가 없습니다.");
        }
    });
});
