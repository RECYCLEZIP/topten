import { useState } from "react";
import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import {
  CorrectAnswer,
  TwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import QuestionCard from "./QuestionCard";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Results from "./Results";

function OXQuiz() {
  const option = [
    <CircleOutlinedIcon style={{ fontSize: "5rem" }} />,
    <ClearIcon style={{ fontSize: "6rem" }} />,
  ];
  const [isSelected, setIsSelected] = useState([false]);

  const [result, setResult] = useState(false);

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
      <Results />
    </QuizContainer>
  );
}

export default OXQuiz;
