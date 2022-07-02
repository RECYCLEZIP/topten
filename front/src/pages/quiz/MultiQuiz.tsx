import { OptionNumber, QuizOption } from "../../styles/quizStyles/QuizzesStyle";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  answerState,
  currentQuizState,
  selectedAnswerState,
} from "../../stores/atoms";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// multiple choice quiz page
function MultiQuiz() {
  const [isSelected, setIsSelected] = useRecoilState(selectedAnswerState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];
  const setOption = useSetRecoilState(answerState);

  // selected option toggle true
  const clickHandler = (idx: number) => {
    const newArr = Array<boolean>(currentQuiz.options.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  useEffect(() => {
    setIsSelected([]);
  }, []);

  useEffect(() => {
    const answer = isSelected.indexOf(true).toString();
    setOption(answer);
  }, [isSelected]);

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 객관식 퀴즈</title>
      </Helmet>
      {currentQuiz.options.map((option, index) => {
        return (
          <QuizOption
            onClick={() => clickHandler(index)}
            isSelected={isSelected[index]}
            key={index}
          >
            <OptionNumber isSelected={isSelected[index]}>
              {index + 1}.{" "}
            </OptionNumber>
            {option}
          </QuizOption>
        );
      })}
    </>
  );
}

export default MultiQuiz;
