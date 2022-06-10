import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { QuizService } from "@src/service/quiz.service";
import { STATUS_200_OK } from "@src/utils/statusCode";
import { Submissions } from "./quiz.types";

export const quizController = Router();

// * 퀴즈 유형별 퀴즈목록 조회(type 파라미터 : "multipleChoice", "mixUp", "ox")
quizController.get(
    "/quizzes",
    wrapAsyncFunc(async (req, res, next) => {
        const quizType = req.query.type as string;
        const quizList = await QuizService.getQuizList(quizType);
        return res.status(STATUS_200_OK).json(quizList);
    }),
);

// * 단일 퀴즈 정보 조회(id 기반 조회)
quizController.get(
    "/quizzes/:id",
    wrapAsyncFunc(async (req, res, next) => {
        const quizId = req.params.id;
        const quiz = await QuizService.getQuiz(quizId);
        return res.status(STATUS_200_OK).json(quiz);
    }),
);

// * 많이 틀린 퀴즈 순으로 상위 3개 퀴즈리스트 조회
quizController.get(
    "/quizzes/wrong",
    wrapAsyncFunc(async (req, res, next) => {
        const quizzesByWrongRate = await QuizService.getQuizByWrongRate();
        return res.status(STATUS_200_OK).json(quizzesByWrongRate);
    }),
);

// * 퀴즈 셋 제출(타입별) => 채점결과 반환
// * requst body = { type: "ox", answers: { quizId1: 1번문제 풀이, quizId2: 2번문제 풀이, quizId3: 3번문제 풀이, quizId4: 4번문제 풀이 }}
// * result = { result : { quizId1 : true, quizId2 : true, quizId3 : true, quizId4 : false }, score : 75 }
quizController.post(
    "/quizzes/submission",
    wrapAsyncFunc(async (req, res, next) => {
        const { type, answers }: Submissions = req.body;
        const result = await QuizService.getResults({ type, answers });
        return res.status(STATUS_200_OK).json(result);
    }),
);

// * 단일 퀴즈 제출 => 채점결과 반환
// * requestBody = { "answer": "1" }
// * result = {result: true}
quizController.post(
    "/quizzes/:id/submission",
    wrapAsyncFunc(async (req, res, next) => {
        const quizId = req.params.id;
        const answer: string = req.body.answer;
        const result = await QuizService.getResult(quizId, answer);
        return res.status(STATUS_200_OK).json(result);
    }),
);
