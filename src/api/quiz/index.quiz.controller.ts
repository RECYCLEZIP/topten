import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { QuizService } from "@src/service/quiz.service";

export const quizController = Router();

// * 퀴즈 유형별 퀴즈목록(type 파라미터 : "multipleChoice", "mixUp", "ox")
quizController.get(
    "/quiz",
    wrapAsyncFunc(async (req, res, next) => {
        const quizService = new QuizService();
        const quizType = req.query.type as string;
        const quizList = await quizService.getQuizList(quizType);
        return res.json(quizList);
    }),
);
