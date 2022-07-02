import React, { useState } from "react";
import { CorrectAnswer } from "../../styles/quizStyles/QuizzesStyle";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  answerState,
  currentPageState,
  currentQuizState,
  quizConfirmState,
  toPostAnswerState,
  viewAnswerState,
} from "../../stores/atoms";
import { postData } from "../../api";
import { customToastify } from "../../components/customToastify";

function AnswerAlert() {
  const option = useRecoilValue(answerState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];
  const currentPage = useRecoilValue(currentPageState);
  const [isCorrect, setIsCorrect] = useState(false);
  const [toPostAnswer, setToPostAnswer] = useRecoilState(toPostAnswerState);
  const setOpenResult = useSetRecoilState(viewAnswerState);
  const [confirm, setConfirm] = useRecoilState(quizConfirmState);

  const CheckAnswer = async () => {
    if (option === "-1") return customToastify("warn", "답을 선택해주세요!");
    setConfirm(true);
    try {
      const res = await postData(`quizzes/${currentQuiz._id}/submission`, {
        answer: option,
      });
      setIsCorrect(res.data.isCorrect);
      if (res.data.isCorrect) {
        customToastify("success", "맞았습니다!");
      } else {
        customToastify("error", "틀렸습니다!");
      }
      setTimeout(() => {
        setOpenResult((cur) => !cur);
        setConfirm(false);
        const answerList = [...toPostAnswer];
        answerList[currentPage] = { quizId: currentQuiz._id, answer: option };
        setToPostAnswer(answerList);
      }, 1000);
    } catch {
      customToastify("error", "채점 중 에러가 발생하였습니다.");
    }
  };

  return (
    <>
      <CorrectAnswer
        onClick={() => {
          CheckAnswer();
        }}
        disabled={confirm}
      >
        정답 확인
      </CorrectAnswer>
    </>
  );
}

export default AnswerAlert;
