import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  currentPageState,
  currentQuizState,
  toPostAnswerState,
  viewAnswerState,
} from "../../stores/atoms";
import { Result, ResultText } from "../../styles/quizStyles/QuizzesStyle";
import AnswerAlert from "./AnswerAlert";

// each quiz commentary component
function Answer() {
  const [openResult, setOpenResult] = useRecoilState(viewAnswerState);
  const currentPage = useRecoilValue(currentPageState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];
  const toPostAnswer = useRecoilValue(toPostAnswerState);

  useEffect(() => {
    if (toPostAnswer[currentPage]) {
      return setOpenResult(true);
    }
    setOpenResult(false);
  }, [currentPage]);

  return (
    <div>
      {!openResult ? (
        <AnswerAlert></AnswerAlert>
      ) : (
        <Result>
          <ResultText>해설</ResultText>
          <ResultText size="0.6rem">{currentQuiz.description}</ResultText>
        </Result>
      )}
    </div>
  );
}

export default Answer;
