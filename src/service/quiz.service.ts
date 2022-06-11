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
        const quizSetResult: quizSetResult = { result: [], score: 0 }; // * 리턴할 데이터

        const todayDate = new Date(); // * dayjs로 YYYY-MM-DD 형태로
        const userAnswer = Object.entries(answers);

        for (let i = 0; i < userAnswer.length; i++) {
            const toUpdate: ToUpdate = { totalUser: 0, wrong: 0 };
            const quizId = userAnswer[i][0];
            const answer: string = userAnswer[i][1];
            const correctAnswer = quizAnswer.find((quiz) => String(quiz._id) === quizId);

            if (correctAnswer === undefined) {
                throw new Error(`${quizId}에 해당하는 문제 정보가 없습니다.`);
            }

            // toUpdate.totalUser += 1;
            // let quizResult = {};
            // if (answer === correctAnswer.answer) {
            //     quizResult = { quizId, isCorrect: true };
            //     quizSetResult.score += Number((1 / quizAnswer.length) * 100);
            // } else {
            //     quizResult = { quizId, isCorrect: false };
            //     toUpdate.wrong += 1;
            // }
            // quizSetResult.result.push(quizResult);

            // // * 해당 문제에 대한 totalUser와 wrong 갱신($set)
            // if (correctAnswer.result[0].date === todayDate) {
            //     await Quiz.updateQuizInfo(toUpdate);
            // } else {
            //     // * 날짜가 넘어간 경우
            //     toUpdate.date = todayDate;
            //     toUpdate.yesterday = Number((toUpdate.wrong / toUpdate.totalUser) * 100);
            //     await Quiz.updateQuizInfo(toUpdate);
            // }
        }

        return quizSetResult;
    }
}
