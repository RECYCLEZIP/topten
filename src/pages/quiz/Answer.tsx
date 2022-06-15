import { useState } from "react";
import { Result, ResultText } from "../../styles/quizStyles/QuizzesStyle";
import AnswerAlert from "./AnswerAlert";

// each quiz commentary component
function Answer() {
  const [result, setResult] = useState(false);
  const answer = false;

  return (
    <div>
      {!result ? (
        <AnswerAlert setResult={setResult} answer={answer}></AnswerAlert>
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
