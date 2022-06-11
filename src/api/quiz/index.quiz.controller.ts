import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { QuizService } from "@src/service/quiz.service";
import { STATUS_200_OK } from "@src/utils/statusCode";
import { Submissions } from "./quiz.types";

export const quizController = Router();

quizController.get(
    "/quizzes",
    wrapAsyncFunc(async (req, res, next) => {
        const quizType = req.query.type as string;
        const quizList = await QuizService.getQuizList(quizType);
        return res.status(STATUS_200_OK).json(quizList);
    }),
);

quizController.get(
    "/quizzes/:id",
    wrapAsyncFunc(async (req, res, next) => {
        const quizId = req.params.id;
        const quiz = await QuizService.getQuiz(quizId);
        return res.status(STATUS_200_OK).json(quiz);
    }),
);

quizController.get(
    "/quizzes/wrong",
    wrapAsyncFunc(async (req, res, next) => {
        const quizzesByWrongRate = await QuizService.getQuizByWrongRate();
        return res.status(STATUS_200_OK).json(quizzesByWrongRate);
    }),
);

quizController.post(
    "/quizzes/:id/submission",
    wrapAsyncFunc(async (req, res, next) => {
        const quizId = req.params.id;
        const answer: string = req.body.answer;
        const result = await QuizService.getQuizResult(quizId, answer);
        return res.status(STATUS_200_OK).json(result);
    }),
);

quizController.post(
    "/quizzes/submission",
    wrapAsyncFunc(async (req, res, next) => {
        const { type, answers }: Submissions = req.body;
        const result = await QuizService.getQuizSetResults({ type, answers });
        return res.status(STATUS_200_OK).json(result);
    }),
);
