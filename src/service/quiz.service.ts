import dayjs from "dayjs";
import { Quiz } from "../db/index";
import { Submissions, ToUpdate } from "../api/quiz/quiz.types";

interface quizSetResult {
    result: Object[];
    score: number;
}

export class QuizService {
    constructor() {}
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
        let quizResult = { result: true };
        const todayDate = new Date();
        const quiz = await Quiz.findQuizById(quizId); // ? 리턴타입에 null이 왜 있는지?
        const result = quiz!.result[0];

        if (quiz === undefined) {
            const errorMessage = `${quizId}에 해당하는 퀴즈 정보가 없습니다.`;
            return { errorMessage };
        }

        // * 날짜 체크 -> 정답 체크(totalUser, wrong 갱신)
        if (dayjs(todayDate).format("YYYY.MM.DD") !== dayjs(result.date).format("YYYY.MM.DD")) {
            if (answer !== quiz!.answer) {
                result.wrong += 1;
                quizResult.result = false;
            }

            const wrongRate = Number((result.wrong / result.totalUser) * 100);
            const newResult = [
                {
                    date: todayDate,
                    totalUser: 1,
                    wrong: 0,
                    yesterday: wrongRate !== NaN ? wrongRate : 0,
                },
            ];

            await Quiz.updateQuizInfo(quizId, newResult);
        } else {
            result.totalUser += 1;
            if (answer !== quiz!.answer) {
                result.wrong += 1;
                quizResult.result = false;
            }

            await Quiz.updateQuizInfo(quizId, result);
        }

        return quizResult;

        // * 2. 날짜 체크 후 날짜가 같으면 그대로 update
        // * 날짜 다르면 date, yesterday 갱신, totalUser, wrong은 0으로 초기화 후 update
    }

    // * 퀴즈셋 채점
    static async getResults({ type, answers }: Submissions) {
        // * 1. 각 문제에 대한 정보 업데이트(totalUser, wrong)
        // * 2. 각 문제 채점 결과, 총점 데이터 리턴
        // * 3. Date가 바뀌면, result 초기화(new Date(), 0, 0, yesterday:어제 오답률)

        // * 해당 타입의 문제셋의 정답 조회
        const quizAnswer = await Quiz.findAnswerByQuizType(type);

        // * 문제 순회하면서 정답 체크 -> totalUser와 wrong 갱신
        let quizSetResult: quizSetResult = { result: [], score: 0 }; // * 리턴할 데이터

        const todayDate = new Date(); // * dayjs로 YYYY-MM-DD 형태로
        const userAnwer = Object.entries(answers);

        for (let i = 0; i < userAnwer.length; i++) {
            const toUpdate: ToUpdate = { totalUser: 0, wrong: 0 };
            const quizId = userAnwer[i][0];
            const answer: string = userAnwer[i][1];
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
