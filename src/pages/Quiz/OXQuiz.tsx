import { useState } from "react";
import {
  QuizContainer,
  TwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import QuestionCard from "./QuestionCard";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Answer from "./Answer";

// ox quiz page component
function OXQuiz() {
  //ox icon list
  const option = [
    <CircleOutlinedIcon style={{ fontSize: "2.5rem" }} />,
    <ClearIcon style={{ fontSize: "3.5rem" }} />,
  ];
  //recoil로 빼도록 하자.
  const [isSelected, setIsSelected] = useState([false]);

  // selected option toggle true
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
            <TwoOption
              onClick={() => clickHandler(index)}
              isSelected={isSelected[index]}
            >
              {text}
            </TwoOption>
          );
        })}
      </TwoOptions>
      <Answer />
    </QuizContainer>
  );
}

export default OXQuiz;
