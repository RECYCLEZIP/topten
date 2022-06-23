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
        const x = req.query.x as string;
        const y = req.query.y as string;
        const closeRobotList = await RobotService.getCloseRobots(x, y);
        res.status(STATUS_200_OK).json(closeRobotList);
    }),
);

export default robotController;
