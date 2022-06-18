import React, { useState } from "react";
import { CorrectAnswer } from "../../styles/quizStyles/QuizzesStyle";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  answerState,
  currentQuizState,
  quizConfirmState,
  toPostAnswerState,
  viewAnswerState,
} from "../../stores/atoms";
import { postData } from "../../api";
import { toast } from "react-toastify";

function AnswerAlert() {
  const option = useRecoilValue(answerState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];
  const [isCorrect, setIsCorrect] = useState(false);
  const setToPostAnswer = useSetRecoilState(toPostAnswerState);
  const setOpenResult = useSetRecoilState(viewAnswerState);
  const [confirm, setConfirm] = useRecoilState(quizConfirmState);

  const correct = () =>
    toast.success("맞았습니다!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notCorrect = () =>
    toast.error("틀렸습니다!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const alert = () =>
    toast.warn("답을 선택해주세요!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const CheckAnswer = async () => {
    if (option === "-1") return alert();
    setConfirm(true);
    try {
      const res = await postData(`quizzes/${currentQuiz._id}/submission`, {
        answer: option,
      });
      setIsCorrect(res.data.isCorrect);
      if (res.data.isCorrect) {
        correct();
      } else {
        notCorrect();
      }
      setToPostAnswer((prev) => [
        ...prev,
        { quizId: currentQuiz._id, answer: option },
      ]);
      setTimeout(() => {
        setOpenResult((cur) => !cur);
        setConfirm(false);
      }, 2000);
    } catch {
      console.log("post data request fail");
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
