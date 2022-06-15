import {
  QuizContainer,
  OptionNumber,
  QuizOption,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Answer from "./Answer";

// multiple choice quiz page
function MultiQuiz() {
  const option = ["안녕하세요", "안녕하세요", "안녕하세요", "안녕하세요"];
  const [isSelected, setIsSelected] = useState([false]);

  // selected option toggle true
  const clickHandler = (idx: number) => {
    const newArr = Array<boolean>(option.length).fill(false);
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
            key={index}
          >
            <OptionNumber isSelected={isSelected[index]}>
              {index + 1}.{" "}
            </OptionNumber>
            안녕하세요.
          </QuizOption>
        );
      })}
      <Answer />
    </QuizContainer>
  );
}

export default MultiQuiz;
