import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { userSchema } from "@src/utils/bodySchema";
import { UserService } from "@src/service/user.service";
import { authRequired } from "@src/middlewares/authRequired";
import { bodyValidator } from "@src/middlewares/bodyValidator";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

const userController = Router();

userController.get(
    "/users/current",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { currentUserId } = req.cookies;
        const userInfo = await UserService.getByUser(currentUserId);
        res.status(STATUS_200_OK).json(userInfo);
    }),
);

userController.get(
    "/users/:id",
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const userInfo = await UserService.getByUser(id);
        res.status(STATUS_200_OK).json(userInfo);
    }),
);

userController.post(
    "/users/register",
    bodyValidator(userSchema),
    wrapAsyncFunc(async (req, res, _next) => {
        const createdUser = await UserService.addUser(req.body);
        res.status(STATUS_201_CREATED).json(createdUser);
    }),
);

userController.post(
    "/users/login",
    wrapAsyncFunc(async (req, res, _next) => {
        const { user, accessToken, refreshToken } = await UserService.login(req.body);
        res.cookie("accessToken", accessToken);
        res.cookie("refreshToken", refreshToken);
        res.status(STATUS_200_OK).json(user);
    }),
);

userController.put(
    "/users/update",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { currentUserId } = req.cookies;
        const updatedUser = await UserService.updateUser(currentUserId, req.body);
        res.status(STATUS_200_OK).json(updatedUser);
    }),
);

userController.delete(
    "/users/delete",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { currentUserId } = req.cookies;
        const deleteResult = await UserService.deleteUser(currentUserId);
        res.status(STATUS_200_OK).json(deleteResult);
    }),
);

export default userController;
