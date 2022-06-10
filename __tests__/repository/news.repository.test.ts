import { News } from "@src/db";
import { INews } from "@src/utils/types/interface";
import { NewsModel } from "@src/db/news/news.schema";

describe("NEWS 모델 접근", () => {
    const tempNews: INews = { url: "http://localhost", title: "로컬호스트" };

    it("findAll은 모델에서 뉴스목록을 찾는다.", async () => {
        const spyFn = jest.spyOn(NewsModel, "find");
        await News.findAll();
        expect(spyFn).toBeCalledTimes(1);
    });

    it("create는 뉴스를 생성한다.", async () => {
        const createdNews = await News.create(tempNews);
        expect(createdNews.url).toEqual("http://localhost");
        expect(createdNews.title).toEqual("로컬호스트");
    });

    it("update는 뉴스를 수정한다.", async () => {
        const news = await News.create(tempNews);
        const updatedNews = await News.update(news._id.toString(), {
            url: "http://google",
            title: "구글",
        });
        expect(updatedNews?.url).toEqual("http://google");
        expect(updatedNews?.title).toEqual("구글");
    });

    it("delete는 뉴스를 삭제한다.", async () => {
        const news = await News.create(tempNews);
        const deletedNews = await News.delete(news._id.toString());
        expect(deletedNews?.url).toEqual("http://localhost");
        expect(deletedNews?.title).toEqual("로컬호스트");
    });
});
