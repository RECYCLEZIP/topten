import { News } from "@src/db";
import { newsService } from "@src/service/news.service";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_404_NOTFOUND, STATUS_503_SERVICEUNAVAILABLE } from "@src/utils/statusCode";

describe("NEWS SERVICE LOGIC", () => {
    it("NEWS 목록 반환을 반환한다.", async () => {
        News.findAll = jest
            .fn()
            .mockResolvedValue([{ url: "http://test.com", title: "테스트기사" }]);
        const news = await newsService.getNewsList();
        expect(news).toHaveLength(1);
        expect(news[0].url).toEqual("http://test.com");
        expect(news[0].title).toEqual("테스트기사");
    });

    it("NEWS를 생성한다.", async () => {
        const createdNews = await newsService.addNews({ url: "serviceURL", title: "serviceTitle" });
        expect(createdNews.url).toEqual("serviceURL");
        expect(createdNews.title).toEqual("serviceTitle");
    });

    it("NEWS를 수정한다.", async () => {
        const spyFn = jest.spyOn(News, "update");
        const newNews = await newsService.addNews({ url: "수정전url", title: "수정전title" });
        const updateNews = await newsService.updateNews(newNews._id.toString(), {
            url: "http://",
            title: "수정했어요",
        });
        expect(spyFn).toBeCalledTimes(1);
        expect(updateNews?.url).toEqual("http://");
        expect(updateNews?.title).toEqual("수정했어요");
    });

    it("NEWS를 삭제한다.", async () => {
        const spyFn = jest.spyOn(News, "delete");
        const targetNews = await newsService.addNews({ url: "삭제", title: "삭제" });
        const deleteResult = await newsService.deleteNews(targetNews._id.toString());
        expect(spyFn).toBeCalledTimes(1);
        expect(deleteResult.message).toBe("삭제가 완료되었습니다.");
    });
});

describe("NEWS SERVICE ERROR HANDLING", () => {
    it("NEWS 목록이 null이나 undefined라면 에러를 발생시킨다.", async () => {
        News.findAll = jest.fn().mockResolvedValue(null);
        try {
            await newsService.getNewsList();
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_503_SERVICEUNAVAILABLE);
            expect(err.message).toBe("뉴스 목록을 가져올 수 없습니다.");
        }
    });

    it("NEWS 수정 시 뉴스를 찾을 수 없으면 에러가 발생한다.", async () => {
        News.update = jest.fn().mockResolvedValue(null);
        try {
            await newsService.updateNews("id", { url: "temp", title: "temp" });
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("해당 뉴스를 찾을 수 없습니다.");
        }
    });

    it("NEWS 삭제 시 뉴스를 찾을 수 없으면 에러가 발생한다.", async () => {
        News.delete = jest.fn().mockResolvedValue(null);
        try {
            await newsService.deleteNews("id");
        } catch (err: any) {
            expect(err).toBeInstanceOf(RequestError);
            expect(err.status).toBe(STATUS_404_NOTFOUND);
            expect(err.message).toBe("해당 뉴스를 찾을 수 없습니다.");
        }
    });
});
