import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { ITrash } from "@src/utils/types/interface";
import { trashService } from "@src/service/trash.service";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

const trashController = Router();

trashController.get(
    "/trash",
    wrapAsyncFunc(async (req, res, _next) => {
        const trashList = await trashService.getTrashList(req.query);
        res.status(STATUS_200_OK).json(trashList);
    }),
);

trashController.post(
    "/trash",
    wrapAsyncFunc(async (req, res, _next) => {
        const trashInfo: ITrash = req.body;
        const createdTrash = await trashService.addTrash(trashInfo);
        res.status(STATUS_201_CREATED).json(createdTrash);
    }),
);

trashController.patch(
    "/trash/:id",
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const trashInfo: ITrash = req.body;
        const updatedTrash = await trashService.updateTrash(id, trashInfo);
        res.status(STATUS_200_OK).json(updatedTrash);
    }),
);

trashController.delete(
    "/trash/:id",
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const deleteResult = await trashService.deleteTrash(id);
        res.status(STATUS_200_OK).json(deleteResult);
    }),
);

export default trashController;
