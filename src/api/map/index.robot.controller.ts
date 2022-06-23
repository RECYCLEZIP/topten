import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { STATUS_200_OK } from "@src/utils/statusCode";

const robotController = Router();

robotController.get(
    "/robot",
    wrapAsyncFunc(async (req, res, next) => {
        const closeRobotList = await RobotService.getCloseRobots(req.query);
        res.status(STATUS_200_OK).json(closeRobotList);
    }),
);

export default robotController;
