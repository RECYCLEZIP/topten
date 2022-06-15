import QuestionCard from "./QuestionCard";
import {
  TextTwoOption,
  TwoOptions,
  QuizContainer,
} from "../../styles/quizStyles/QuizzesStyle";
import { useEffect, useState } from "react";
import Answer from "./Answer";
import { getData } from "../../api";
import { quizListState } from "../../stores/atoms";
import { useSetRecoilState } from "recoil";

// vs quiz page
function VSQuiz() {
  const option = ["일반", "음식물"];
  const [isSelected, setIsSelected] = useState([false]);
  const setQuizzes = useSetRecoilState(quizListState);

  const clickHandler = (idx: number) => {
    const newArr: boolean[] = Array(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  const getQuiz = async () => {
    try {
      const res = await getData("quizzes?type=mixUp");
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
            <TextTwoOption
              onClick={() => clickHandler(index)}
              isSelected={isSelected[index]}
              key={index}
            >
              {text}
            </TextTwoOption>
          );
        })}
      </TwoOptions>
    </>
  );
}

export default VSQuiz;
