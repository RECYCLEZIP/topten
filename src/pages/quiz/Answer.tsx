import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentPageState, selectedAnswerState } from "../../stores/atoms";
import { Result, ResultText } from "../../styles/quizStyles/QuizzesStyle";
import AnswerAlert from "./AnswerAlert";

// each quiz commentary component
function Answer() {
  const [result, setResult] = useState(false);
  const isSelected = useRecoilValue(selectedAnswerState);
  const currentPage = useRecoilValue(currentPageState);
  console.log(isSelected);

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
          <ResultText size="0.6rem">내용</ResultText>
        </Result>
      )}
    </div>
  );
}

export default Answer;
