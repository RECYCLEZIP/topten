import { Express } from "express";
import newsController from "@src/api/news/index.news.controller";
import quizController from "@src/api/quiz/index.quiz.controller";
import trashController from "@src/api/trash/index.trash.controller";

export const indexController = (app: Express) => {
    app.use(newsController);
    app.use(quizController);
    app.use(trashController);
};
