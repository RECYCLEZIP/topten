import { Router } from "express";
// import { IPost } from "@src/models/interface";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { PostService } from "@src/service/post.service";
import { authRequired } from "@src/middlewares/authRequired";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";
// import { bodyValidator, paramsValidator } from "@src/middlewares/requestValidator";

const postController = Router();

postController.get(
    "/posts",
    wrapAsyncFunc(async (req, res, _next) => {
        const postList = await PostService.getPostList(req.query);
        res.status(STATUS_200_OK).json(postList);
    }),
);

postController.get(
    "/posts/:id",
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const postInfo = await PostService.getByPost(id);
        res.status(STATUS_200_OK).json(postInfo);
    }),
);

postController.post(
    "/posts",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { currentUserId } = req.cookies;
        const createdPost = await PostService.addPost(currentUserId, req.body);
        res.status(STATUS_201_CREATED).json(createdPost);
    }),
);

postController.put(
    "/posts/:id",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const updatedPost = await PostService.updatePost(id, req.body);
        res.status(STATUS_200_OK).json(updatedPost);
    }),
);

postController.delete(
    "/posts/:id",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const deletedPost = await PostService.deletePost(id);
        res.status(STATUS_200_OK).json(deletedPost);
    }),
);

export default postController;
