import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { RobotService } from "@src/service/robot.service";
import { queryStringValidator } from "@src/middlewares/requestValidator";
import { coordinateSchema } from "@src/utils/queryStringSchema";
import { STATUS_200_OK } from "@src/utils/statusCode";

const robotController = Router();

robotController.get(
    "/robot",
    queryStringValidator(coordinateSchema),
    wrapAsyncFunc(async (req, res, next) => {
        /*  #swagger.tags = ["map"]
            #swagger.description = "반경 10km이내 로봇위치 정보 조회" 
            #swagger.parameters['queryString'] = {
                in: 'query',
                description: '유저의 현재 위치정보(경도/위도)를 쿼리스트링으로 담아 보낸다.',
                required: true,
                schema: { $ref: "#/definitions/CoordinatesQuery" }
            }
            #swagger.responses[200] = { 
            schema: { "$ref": "#/definitions/RobotLocationList" },
            description: "반경 10km 내 로봇위치 리스트 반환" } */

        const x = req.query.x as string;
        const y = req.query.y as string;
        const closeRobotList = await RobotService.getCloseRobots(x, y);
        res.status(STATUS_200_OK).json(closeRobotList);
    }),
);

export default robotController;
