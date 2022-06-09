import {
  QuizContainer,
  OptionNumber,
  QuizOption,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Results from "./Results";

function MultiQuiz() {
  const option = ["안녕하세요", "안녕하세요", "안녕하세요", "안녕하세요"];
  const [isSelected, setIsSelected] = useState([false]);

  const clickHandler = (idx: number) => {
    const newArr: boolean[] = Array(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  return (
    <QuizContainer>
      <QuestionCard />
      {option.map((text, index) => {
        return (
          <QuizOption
            onClick={() => clickHandler(index)}
            isSelected={isSelected[index]}
          >
            <OptionNumber isSelected={isSelected[index]}>
              {index + 1}.{" "}
            </OptionNumber>
            안녕하세요.
          </QuizOption>
        );
      })}
      <Results />
    </QuizContainer>
  );
}

export default MultiQuiz;
