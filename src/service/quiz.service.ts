import { Quiz } from "../db/index";
import { Submissions, ToUpdate } from "../api/quiz/quiz.types";

interface quizSetResult {
    result: Object[];
    score: number;
}

export class QuizService {
    constructor() {}
    async getQuizList(quizType: string) {
        return await Quiz.findByQuizType(quizType);
    }

    async getQuiz(quizId: string) {
        return await Quiz.findQuizById(quizId);
    }

    // * 퀴즈셋 채점
    async getResults({ type, answers }: Submissions) {
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

            toUpdate.totalUser += 1;
            let quizResult = {};
            if (answer === correctAnswer.answer) {
                quizResult = { quizId, isCorrect: true };
                quizSetResult.score += Number((1 / quizAnswer.length) * 100);
            } else {
                quizResult = { quizId, isCorrect: false };
                toUpdate.wrong += 1;
            }
            quizSetResult.result.push(quizResult);

            // * 해당 문제에 대한 totalUser와 wrong 갱신($set)
            if (correctAnswer.result[0].date === todayDate) {
                await Quiz.updateQuizInfo(toUpdate);
            } else {
                // * 날짜가 넘어간 경우
                toUpdate.date = todayDate;
                toUpdate.yesterday = Number((toUpdate.wrong / toUpdate.totalUser) * 100);
                await Quiz.updateQuizInfo(toUpdate);
            }
        }

        return quizSetResult;
    }
}
