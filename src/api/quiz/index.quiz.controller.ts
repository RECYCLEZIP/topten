import { Router } from "express";
import wrapAsyncFunc from "@src/utils/catchAsync";
import { QuizService } from "@src/service/quiz.service";

export const quizController = Router();
const quizService = new QuizService();

// * 퀴즈 유형별 퀴즈목록 조회(type 파라미터 : "multipleChoice", "mixUp", "ox")
quizController.get(
    "/quizzes",
    wrapAsyncFunc(async (req, res, next) => {
        const quizType = req.query.type as string;
        const quizList = await quizService.getQuizList(quizType);
        return res.json(quizList);
    }),
);

// * 단일 퀴즈 정보 조회(id 기반 조회)
quizController.get(
    "quizzes/:id",
    wrapAsyncFunc(async (req, res, next) => {
        const quizId = req.params.id;
        const quiz = await quizService.getQuiz(quizId);
        return res.json(quiz);
    }),
);

// * 많이 틀린 퀴즈 순으로 상위 3개 퀴즈리스트 조회

// * 퀴즈 셋 제출(타입별) => 채점결과 반환
// * result = { result : { quizId1 : true, quizId2 : true, quizId3 : true, quizId4 : false }, score : 75 }

// * 단일 퀴즈 제출 => 채점결과 반환
// * result = {result : { quizId : true }},
