import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger-output.json";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";
import { RequestError } from "@src/middlewares/errorHandler";
import userController from "@src/api/user.controller";
import newsController from "@src/api/news.controller";
import quizController from "@src/api/quiz.controller";
import trashController from "@src/api/trash.controller";
import binsController from "@src/api/bins.controller";
import postController from "@src/api/post.controller";
import commentController from "@src/api/comment.controller";
import robotController from "@src/api/robot.controller";

const indexController = (app: Express) => {
    app.use(userController);
    app.use(newsController);
    app.use(quizController);
    app.use(trashController);
    app.use(binsController);
    app.use(postController);
    app.use(commentController);
    app.use(robotController);
    app.get("/", (_req, res) => {
        res.redirect("/swagger");
    });
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use("*", (_req, _res) => {
        throw new RequestError("요청하신 페이지를 찾을 수 없습니다.", STATUS_404_NOTFOUND);
    });
};

export default indexController;
