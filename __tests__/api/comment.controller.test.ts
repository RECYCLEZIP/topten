import app from "@src/app";
import request from "supertest";
import { PostService } from "@src/service";
import { UserService } from "@src/service";
import { CommentService } from "@src/service";
import { createAccessToken } from "@src/utils/jwt";
import { IComment, IPost, IUser } from "@src/models/interface";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

describe("COMMENT API", () => {
    const tempComment = {
        content: "댓글 내용",
    };

    const tempUser: IUser = {
        email: "test@test.com",
        username: "테스트유저",
        password: "testtest",
    };

    const tempPost: IPost = {
        title: "게시글 제목",
        content: "게시글 내용",
    };

    it("COMMENT POST/ 댓글을 생성한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const createdPost = await PostService.addPost(createdUser._id, tempPost);
        const accessToken = createAccessToken(createdUser._id);
        const res = await request(app)
            .post(`/comments/${createdPost._id}`)
            .set("Authorization", `Bearer ${accessToken}`)
            .send(tempComment);
        expect(res.status).toBe(STATUS_201_CREATED);
        expect(res.body).toHaveProperty("author");
        expect(res.body).toHaveProperty("content");
    });

    it("COMMENT PUT/ 댓글을 수정한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const createdPost = await PostService.addPost(createdUser._id, tempPost);
        const accessToken = createAccessToken(createdUser._id);
        const createdComment = await CommentService.addComment(
            createdUser._id,
            createdPost._id.toString(),
            tempComment as IComment,
        );
        const res = await request(app)
            .put(`/comments/${createdComment._id}`)
            .set("Authorization", `Bearer ${accessToken}`)
            .send({ content: "수정된 내용" });
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.content).toEqual("수정된 내용");
        expect(res.body._id === createdComment._id.toString()).toBe(true);
    });

    it("COMMENT DELETE/ 댓글을 삭제한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const createdPost = await PostService.addPost(createdUser._id, tempPost);
        const accessToken = createAccessToken(createdUser._id);
        const createdComment = await CommentService.addComment(
            createdUser._id,
            createdPost._id.toString(),
            tempComment as IComment,
        );
        const res = await request(app)
            .delete(`/comments/${createdComment._id}/posts/${createdPost._id}`)
            .set("Authorization", `Bearer ${accessToken}`);
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.message).toEqual("삭제가 완료되었습니다.");
    });
});
