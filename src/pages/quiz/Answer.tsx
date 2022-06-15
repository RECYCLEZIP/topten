import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentPageState, currentQuizState } from "../../stores/atoms";
import { Result, ResultText } from "../../styles/quizStyles/QuizzesStyle";
import AnswerAlert from "./AnswerAlert";

// each quiz commentary component
function Answer() {
  const [result, setResult] = useState(false);
  const currentPage = useRecoilValue(currentPageState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];

  useEffect(() => {
    setResult(false);
  }, [currentPage]);

  return (
    <div>
      {!result ? (
        <AnswerAlert setResult={setResult}></AnswerAlert>
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
