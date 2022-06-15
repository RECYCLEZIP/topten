import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { userSchema } from "@src/utils/bodySchema";
import { UserService } from "@src/service/user.service";
import { STATUS_201_CREATED } from "@src/utils/statusCode";
import { bodyValidator } from "@src/middlewares/bodyValidator";

const userController = Router();

userController.post(
    "/users/register",
    bodyValidator(userSchema),
    wrapAsyncFunc(async (req, res, _next) => {
        const createdUser = await UserService.addUser(req.body);
        res.status(STATUS_201_CREATED).json(createdUser);
    }),
);

export default userController;
