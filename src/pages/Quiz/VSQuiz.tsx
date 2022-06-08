import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import QuestionCard from "./QuestionCard";
import {
  TextTwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";
import Results from "./Results";

function VSQuiz() {
  const option = ["일반", "음식물"];
  const [isSelected, setIsSelected] = useState([false]);

  const clickHandler = (idx: number) => {
    const newArr: boolean[] = Array(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  return (
    <QuizContainer>
      <QuestionCard />
      <TwoOptions>
        {option.map((text, index) => {
          return (
            <TextTwoOption
              onClick={() => clickHandler(index)}
              isSelected={isSelected[index]}
            >
              {text}
            </TextTwoOption>
          );
        })}
      </TwoOptions>
      <Results />
    </QuizContainer>
  );
}

export default VSQuiz;
