import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { INews } from "@src/utils/types/interface";
import { newsSchema } from "@src/utils/bodySchema";
import { newsService } from "@src/service/news.service";
import { bodyValidator } from "@src/middlewares/bodyValidator";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

const newsController = Router();

newsController.get(
    "/news",
    wrapAsyncFunc(async (req, res, _next) => {
        const newsList = await newsService.getNewsList(req.query);
        res.status(STATUS_200_OK).json(newsList);
    }),
);

newsController.post(
    "/news",
    bodyValidator(newsSchema),
    wrapAsyncFunc(async (req, res, _next) => {
        const newsInfo: INews = req.body;
        const createdNews = await newsService.addNews(newsInfo);
        res.status(STATUS_201_CREATED).json(createdNews);
    }),
);

newsController.put(
    "/news/:id",
    bodyValidator(newsSchema),
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const newsInfo: INews = req.body;
        const updatedNews = await newsService.updateNews(id, newsInfo);
        res.status(STATUS_200_OK).json(updatedNews);
    }),
);

newsController.delete(
    "/news/:id",
    wrapAsyncFunc(async (req, res, _next) => {
        const { id } = req.params;
        const deleteResult = await newsService.deleteNews(id);
        res.status(STATUS_200_OK).json(deleteResult);
    }),
);

export default newsController;
