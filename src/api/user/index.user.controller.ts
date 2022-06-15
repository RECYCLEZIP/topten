import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { UserService } from "@src/service/user.service";
import { STATUS_201_CREATED } from "@src/utils/statusCode";
// import { IUser } from "@src/models/interface";
// import { userSchema } from "@src/utils/bodySchema";
// import { userService } from "@src/service/trash.service";
// import { bodyValidator } from "@src/middlewares/bodyValidator";

const userController = Router();

userController.post(
    "/users/register",
    wrapAsyncFunc(async (req, res, _next) => {
        const createdUser = await UserService.addUser(req.body);
        res.status(STATUS_201_CREATED).json(createdUser);
    }),
);

export default userController;
