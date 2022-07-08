import {
  TextTwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import { useEffect } from "react";
import { getData } from "../../api";
import {
  answerState,
  quizListState,
  selectedAnswerState,
} from "../../stores/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";

// vs quiz page
function VSQuiz() {
  const option = ["일반", "음식물"];
  const [isSelected, setIsSelected] = useRecoilState(selectedAnswerState);
  const setQuizzes = useSetRecoilState(quizListState);
  const setOption = useSetRecoilState(answerState);

  const clickHandler = (idx: number) => {
    const newArr = Array<boolean>(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  const getQuiz = async () => {
    try {
      const res = await getData("quizzes?type=mixUp");
      setQuizzes(res.data);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getQuiz();
    setIsSelected([]);
  }, []);

  useEffect(() => {
    const answer = isSelected.indexOf(true);
    if (answer === -1) {
      setOption("-1");
    } else {
      setOption(option[answer]);
    }
  }, [isSelected]);

  return (
    <TwoOptions>
      <Helmet>
        <title>분리수ZIP - 일반 vs 음식물</title>
      </Helmet>
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
  );
}

export default VSQuiz;
