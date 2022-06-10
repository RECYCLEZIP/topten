import { Express } from "express";
import newsController from "@src/api/news/index.news.controller";
import trashController from "@src/api/trash/index.trash.controller";

export const indexController = (app: Express) => {
    app.use(newsController);
    app.use(trashController);
};
