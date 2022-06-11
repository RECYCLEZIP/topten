import dayjs from "dayjs";
import { Quiz } from "../db/index";
import { Submissions, ToUpdate } from "../api/quiz/quiz.types";

interface quizSetResult {
    result: Object[];
    score: number;
}

export class QuizService {
    static async getQuizList(quizType: string) {
        return await Quiz.findByQuizType(quizType);
    }

    static async getQuiz(quizId: string) {
        return await Quiz.findQuizById(quizId);
    }

    static async getQuizByWrongRate() {
        return await Quiz.findQuizByWrongRate();
    }

    // * 단일 퀴즈 채점
    static async getResult(quizId: string, answer: string) {
        const quizResult = { isCorrect: true };
        const todayDate = new Date();
        const quiz = await Quiz.findQuizById(quizId);

        if (!quiz) {
            const errorMessage = `${quizId}에 해당하는 퀴즈 정보가 없습니다.`;
            throw new Error(errorMessage);
        }

        const result = quiz.result[0];
        if (answer !== quiz.answer) {
            result.wrong += 1;
            quizResult.isCorrect = false;
        }

        if (dayjs(todayDate).format("YYYY.MM.DD") !== dayjs(result.date).format("YYYY.MM.DD")) {
            const wrongRate = Number((result.wrong / result.totalUser) * 100);
            const newResult = {
                date: todayDate,
                totalUser: 1,
                wrong: 0,
                yesterday: isNaN(wrongRate) ? 0 : wrongRate,
            };
            quiz.result.push(newResult);

            await Quiz.updateQuizInfo(quizId, newResult);
        } else {
            result.totalUser += 1;

            await Quiz.updateQuizInfo(quizId, result);
        }

        return quizResult;
    }

    // * 퀴즈셋 채점 -> 정답, score만 반환
    static async getResults({ type, answers }: Submissions) {
        const quizAnswer = await Quiz.findAnswerByQuizType(type);
        const userAnswer = Object.values(answers);

        let score = 0;
        const result = userAnswer.map((quiz) => {
            const quizId: string = quiz["quizId"];
            const answer: string = quiz["answer"];
            const correctAnswer = quizAnswer.find((quiz) => String(quiz._id) === quizId);
            let isCorrect = false;

            if (!correctAnswer) {
                const errorMessage = `${quizId}와 일치하는 문제 정보가 없습니다.`;
                throw new Error(errorMessage);
            }

            if (correctAnswer.answer === answer) {
                isCorrect = true;
                score += Number((1 / answers.length) * 100);
            }

            return { quizId, isCorrect };
        });
        const quizSetResult = { result, score };

        return quizSetResult;
    }
}
