import { useEffect } from "react";
import { TwoOption, TwoOptions } from "../../styles/quizStyles/QuizzesStyle";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { getData } from "../../api";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  answerState,
  quizListState,
  selectedAnswerState,
} from "../../stores/atoms";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";

// ox quiz page component
function OXQuiz() {
  //ox icon list
  const option = [
    <CircleOutlinedIcon style={{ fontSize: "2.5rem" }} />,
    <ClearIcon style={{ fontSize: "3.5rem" }} />,
  ];
  const resultOption = ["O", "X"];
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
      setOption(resultOption[answer]);
    }
  }, [isSelected]);

  return (
    <TwoOptions>
      <Helmet>
        <title>분리수ZIP - OX 퀴즈</title>
      </Helmet>
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
  );
}

export default OXQuiz;
