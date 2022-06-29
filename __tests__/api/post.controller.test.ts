import app from "@src/app";
import request from "supertest";
import { Post } from "@src/repository";
import { PostService } from "@src/service";
import { UserService } from "@src/service";
import { createAccessToken } from "@src/utils/jwt";
import { IComment, IPost, IUser } from "@src/models/interface";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

describe("POST API", () => {
    const tempPost: IPost = {
        title: "게시글 제목",
        content: "게시글 내용",
    };

    const tempUser: IUser = {
        email: "test@test.com",
        username: "테스트유저",
        password: "testtest",
    };

    it("POST GET/ 게시글목록을 응답받는다.", async () => {
        const res = await request(app).get("/api/posts");
        expect(res.status).toBe(STATUS_200_OK);
    });

    it("POST/:id GET/ 개별 게시글 정보를 응답받는다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const posts = await PostService.addPost(createdUser._id, tempPost);
        const res = await request(app).get(`/api/posts/${posts._id}`);
        expect(res.status).toBe(STATUS_200_OK);
    });

    it("POST /posts/users/:userId 사용자의 게시글 정보를 응답받는다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        await PostService.addPost(createdUser._id, tempPost);
        const res = await request(app).get(`/api/posts/users/${createdUser._id}`);
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body).toHaveProperty("count");
        expect(res.body).toHaveProperty("data");
    });

    it("POST POST/ 게시글을 생성한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const res = await request(app)
            .post("/api/posts")
            .set("Authorization", `Bearer ${accessToken}`)
            .send(tempPost);
        expect(res.status).toBe(STATUS_201_CREATED);
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("content");
    });

    it("POST COMMENT/ 게시글의 댓글을 생성한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const posts = await PostService.addPost(createdUser._id, tempPost);
        const res = await request(app)
            .post(`/api/posts/${posts._id}/comments`)
            .set("Authorization", `Bearer ${accessToken}`)
            .send({ content: "댓글생성테스트" });
        expect(res.status).toBe(STATUS_201_CREATED);
        expect(res.body).toHaveProperty("author");
        expect(res.body.content).toEqual("댓글생성테스트");
    });

    it("POST PUT/ 게시글을 수정한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const posts = await PostService.addPost(createdUser._id, tempPost);
        const res = await request(app)
            .put(`/api/posts/${posts._id}`)
            .set("Authorization", `Bearer ${accessToken}`)
            .send({ title: "수정된 제목", content: "수정된 내용" });
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.title).toEqual("수정된 제목");
        expect(res.body.content).toEqual("수정된 내용");
        expect(res.body._id === posts._id.toString()).toBe(true);
    });

    it("PUT COMMENT/ 댓글을 수정한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const createdPost = await PostService.addPost(createdUser._id, tempPost);
        await PostService.addComment(createdUser._id.toString(), createdPost._id.toString(), {
            content: "댓글생성",
        } as IComment);
        const { comments }: any = await PostService.getByPost(createdPost._id.toString());
        const res = await request(app)
            .put(`/api/posts/${createdPost._id}/comments/${comments[0]._id}`)
            .set("Authorization", `Bearer ${accessToken}`)
            .send({ content: "댓글수정테스트" });
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.comments[0]).toHaveProperty("author");
        expect(res.body.comments[0].content).toEqual("댓글수정테스트");
    });

    it("POST DELETE/ 게시글을 삭제한다.", async () => {
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const posts = await PostService.addPost(createdUser._id, tempPost);
        const res = await request(app)
            .delete(`/api/posts/${posts._id}`)
            .set("Authorization", `Bearer ${accessToken}`);
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.message).toEqual("삭제가 완료되었습니다.");
    });

    it("COMMENT DELETE/ 댓글을 삭제한다.", async () => {
        Post.deleteComment = jest.fn().mockResolvedValue(true);
        const createdUser = await UserService.addUser(tempUser);
        const accessToken = createAccessToken(createdUser._id);
        const createdPost = await PostService.addPost(createdUser._id, tempPost);
        await PostService.addComment(createdUser._id, createdPost._id.toString(), {
            content: "테스트",
        } as IComment);
        const res = await request(app)
            .delete(`/api/posts/${createdPost._id}/comments/${createdPost._id}`)
            .set("Authorization", `Bearer ${accessToken}`);
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.message).toEqual("삭제가 완료되었습니다.");
    });
});
