import { Express } from "express";
import { quizController } from "./quiz/index.quiz.controller";

export const indexController = (app: Express) => {
    app.use(quizController);
};
