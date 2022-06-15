import { useEffect, useState } from "react";
import {
  QuizContainer,
  TwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { getData } from "../../api";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  answerState,
  quizListState,
  selectedAnswerState,
} from "../../stores/atoms";

// ox quiz page component
function OXQuiz() {
  //ox icon list
  const option = [
    <CircleOutlinedIcon style={{ fontSize: "2.5rem" }} />,
    <ClearIcon style={{ fontSize: "3.5rem" }} />,
  ];
  const resultOption = ["O", "X"];
  //recoil로 빼도록 하자.
  const [isSelected, setIsSelected] = useRecoilState(selectedAnswerState);
  const setQuizzes = useSetRecoilState(quizListState);
  const setOption = useSetRecoilState(answerState);

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

  useEffect(() => {
    const answer = isSelected.indexOf(true);
    setOption(resultOption[answer]);
  }, [isSelected]);

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
