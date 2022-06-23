import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { RobotService } from "@src/service/robot.service";
import { STATUS_200_OK } from "@src/utils/statusCode";

const robotController = Router();

robotController.get(
    "/robot",
    wrapAsyncFunc(async (req, res, next) => {
        const x = req.query.x as string;
        const y = req.query.y as string;
        const closeRobotList = await RobotService.getCloseRobots(x, y);
        res.status(STATUS_200_OK).json(closeRobotList);
    }),
);

export default robotController;
