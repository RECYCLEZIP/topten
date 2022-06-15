import { useEffect, useState } from "react";
import {
  QuizContainer,
  TwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import QuestionCard from "./QuestionCard";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Answer from "./Answer";
import { getData } from "../../api";
import { useSetRecoilState } from "recoil";
import { quizListState } from "../../stores/atoms";

// ox quiz page component
function OXQuiz() {
  //ox icon list
  const option = [
    <CircleOutlinedIcon style={{ fontSize: "2.5rem" }} />,
    <ClearIcon style={{ fontSize: "3.5rem" }} />,
  ];
  //recoil로 빼도록 하자.
  const [isSelected, setIsSelected] = useState([false]);
  const setQuizzes = useSetRecoilState(quizListState);

  // selected option toggle true
  const clickHandler = (idx: number) => {
    const newArr: boolean[] = Array(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  const getQuiz = async () => {
    try {
      const res = await getData("quizzes?type=ox");
      setQuizzes(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <>
      <TwoOptions>
        {option.map((text, index) => {
          return (
            <TwoOption
              onClick={() => clickHandler(index)}
              isSelected={isSelected[index]}
              key={index}
            >
              {text}
            </TwoOption>
          );
        })}
      </TwoOptions>
    </>
  );
}

export default OXQuiz;
