import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { STATUS_200_OK } from "@src/utils/statusCode";
import { BinsService } from "@src/service/bins.service";
// import { paramsValidator } from "@src/middlewares/requestValidator";

const binsController = Router();

binsController.get(
    "/bins",
    wrapAsyncFunc(async (req, res, next) => {
        const binsLocation = await BinsService.getBinsLocation(req.query);
        return res.status(STATUS_200_OK).json(binsLocation);
    }),
);

export default binsController;
