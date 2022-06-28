import React, { useEffect, useState } from "react";
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
import { customTostify } from "../../components/customTostify";

function AnswerAlert() {
  const option = useRecoilValue(answerState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];
  const currentPage = useRecoilValue(currentPageState);
  const [isCorrect, setIsCorrect] = useState(false);
  const [toPostAnswer, setToPostAnswer] = useRecoilState(toPostAnswerState);
  const setOpenResult = useSetRecoilState(viewAnswerState);
  const [confirm, setConfirm] = useRecoilState(quizConfirmState);

  const CheckAnswer = async () => {
    if (option === "-1") return customTostify("warn", "답을 선택해주세요!");
    setConfirm(true);
    try {
      const res = await postData(`quizzes/${currentQuiz._id}/submission`, {
        answer: option,
      });
      setIsCorrect(res.data.isCorrect);
      if (res.data.isCorrect) {
        customTostify("success", "맞았습니다!");
      } else {
        customTostify("error", "틀렸습니다!");
      }
      setTimeout(() => {
        setOpenResult((cur) => !cur);
        setConfirm(false);
        const answerList = [...toPostAnswer];
        answerList[currentPage] = { quizId: currentQuiz._id, answer: option };
        setToPostAnswer(answerList);
      }, 1000);
    } catch {
      customTostify("error", "채점 중 에러가 발생하였습니다.");
    }
  };

  useEffect(() => {
    setConfirm(false);
  }, []);

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
