import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { CommentService } from "@src/service/comment.service";
import { authRequired } from "@src/middlewares/authRequired";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

const commentController = Router();

commentController.post(
    "/comments/:postId",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        /*  #swagger.tags = ["comment"]
            #swagger.description = "댓글 생성 **로그인 필수**"
            #swagger.parameters['postId'] = {
                in: 'path',
                description: '댓글을 달 게시글의 ID',
                required: true,
                schema: { $ref: "#/definitions/PostId" }
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: '생성하고자 하는 댓글의 정보를 body에 담아 요청',
                required: true,
                schema: { $ref: "#/definitions/CommentCreateRequest" }
            }
            #swagger.responses[201] = {
            schema: { "$ref": "#/definitions/CommentCreateResponse" },
            description: "생성된 댓글 정보 반환" } */

        const { postId } = req.params;
        const { currentUserId } = req.cookies;
        const createdComment = await CommentService.addComment(currentUserId, postId, req.body);
        res.status(STATUS_201_CREATED).json(createdComment);
    }),
);

commentController.put(
    "/comments/:id",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        /*  #swagger.tags = ["comment"]
            #swagger.description = "댓글 정보 수정 **로그인 필수**"
            #swagger.parameters['id'] = {
                in: 'path',
                description: '수정하고자 하는 댓글의 ID',
                required: true,
                schema: { $ref: "#/definitions/CommentId" }
            }
            #swagger.parameters['body'] = {
                in: 'body',
                description: '수정하고자 하는 댓글의 정보를 body에 담아 요청',
                required: true,
                schema: { $ref: "#/definitions/CommentPutRequest" }
            }
            #swagger.responses[200] = {
            schema: { "$ref": "#/definitions/CommentPutResponse" },
            description: "수정된 댓글 정보 반환" } */

        const { id } = req.params;
        const updatedComment = await CommentService.updateComment(id, req.body);
        res.status(STATUS_200_OK).json(updatedComment);
    }),
);

commentController.delete(
    "/comments/:id",
    authRequired,
    wrapAsyncFunc(async (req, res, _next) => {
        /*  #swagger.tags = ["comment"]
            #swagger.description = "댓글 삭제 **로그인 필수**"
            #swagger.parameters['id'] = {
                in: 'path',
                description: '삭제하고자 하는 댓글의 ID',
                required: true,
                schema: { $ref: "#/definitions/CommentId" }
            }
            #swagger.responses[200] = {
            schema: { "$ref": "#/definitions/DeleteResponse" },
            description: "삭제 메시지" } */

        const { id } = req.params;
        const deletedComment = await CommentService.deleteComment(id);
        res.status(STATUS_200_OK).json(deletedComment);
    }),
);

export default commentController;
