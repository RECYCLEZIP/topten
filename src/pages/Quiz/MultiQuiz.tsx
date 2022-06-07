import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import {
  CorrectAnswer,
  OptionNumber,
  QuizOption,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

function MultiQuiz() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((cur: boolean) => !cur);
  };

  return (
    <QuizContainer>
      <QuestionCard />
      <QuizOption onClick={clickHandler} isClick={click}>
        <OptionNumber isClick={click}>1. </OptionNumber>안녕하세요.
      </QuizOption>
      <QuizOption onClick={clickHandler} isClick={click}>
        <OptionNumber isClick={click}>2. </OptionNumber>안녕하세요.
      </QuizOption>
      <QuizOption onClick={clickHandler} isClick={click}>
        <OptionNumber isClick={click}>3. </OptionNumber>안녕하세요.
      </QuizOption>
      <QuizOption onClick={clickHandler} isClick={click}>
        <OptionNumber isClick={click}>4. </OptionNumber>안녕하세요.
      </QuizOption>
      <CorrectAnswer>정답 확인</CorrectAnswer>
    </QuizContainer>
  );
}

export default MultiQuiz;
