import { Post } from "@src/db";
import { FilterQuery, IPost } from "@src/models/interface";
import { RequestError } from "@src/middlewares/errorHandler";
import { UserService } from "@src/service/user.service";
import { createFilterQuery } from "@src/utils/createQuery";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

export class PostService {
    static async getPostList(query: FilterQuery) {
        const filterList = ["title", "content"];
        const { filteredQuery, limit } = createFilterQuery(query, filterList);
        const foundPostList = await Post.find({ filteredQuery, limit });
        if (!foundPostList)
            throw new RequestError("게시글 목록을 가져올 수 없습니다.", STATUS_404_NOTFOUND);
        return foundPostList;
    }

    static async addPost(id: string, postInfo: IPost) {
        const foundUser = await UserService.getByUser(id);
        if (!foundUser) throw new RequestError("로그인 사용자를 찾을 수 없습니다.");
        postInfo.author = foundUser;
        const createdPost = await Post.create(postInfo);
        if (!createdPost) throw new RequestError("게시글 등록에 실패하였습니다.");
        return createdPost;
    }

    static async updatePost(id: string, postInfo: IPost) {
        const updatedPost = await Post.update(id, postInfo);
        if (!updatedPost) throw new RequestError("해당 게시글을 찾을 수 없습니다.");
        return updatedPost;
    }

    static async deletePost(id: string) {
        const deletedPost = await Post.delete(id);
        if (!deletedPost) throw new RequestError("해당 게시글을 찾을 수 없습니다.");
        return { message: "삭제가 완료되었습니다." };
    }
}
