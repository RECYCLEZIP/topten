import { useState } from "react";
import {
  CorrectAnswer,
  Result,
  ResultText,
} from "../../styles/quizStyles/QuizzesStyle";

function Results() {
  const [result, setResult] = useState(false);
  return (
    <div>
      {!result ? (
        <CorrectAnswer onClick={() => setResult((cur) => !cur)}>
          정답 확인
        </CorrectAnswer>
      ) : (
        <Result>
          <ResultText>해설</ResultText>
          <ResultText size={"0.6rem"}>내용</ResultText>
        </Result>
      )}
    </div>
  );
}

export default Results;
