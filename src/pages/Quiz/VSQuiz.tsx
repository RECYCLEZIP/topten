import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import QuestionCard from "./QuestionCard";
import {
  CorrectAnswer,
  TextTwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";

function VSQuiz() {
  const [oState, setOState] = useState(false);
  const [xState, setXState] = useState(false);

  return (
    <QuizContainer>
      <QuestionCard />
      <TwoOptions>
        <TextTwoOption
          onClick={() => setOState((cur) => !cur)}
          isClick={oState}
        >
          일반
        </TextTwoOption>
        <TextTwoOption
          onClick={() => setXState((cur) => !cur)}
          isClick={xState}
        >
          음식물
        </TextTwoOption>
      </TwoOptions>
      <CorrectAnswer>정답 확인</CorrectAnswer>
    </QuizContainer>
  );
}

export default VSQuiz;
