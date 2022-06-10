import { QuizList } from "../../styles/quizStyles/QuizListStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  QuizListBox,
  QuizNumber,
  QuizText,
} from "../../styles/quizStyles/QuizListStyle";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const url = ["multiple-choice", "ox", "vs"];
  const quizList = ["객관식 퀴즈", "OX 퀴즈", "음식물 vs 일반"];
  const quizDescription = [
    "다양한 보기 중에 고르는 객관식",
    "OX 중에 고르기",
    "헷갈리는 음식물과 일반 쓰레기",
  ];
  const navigate = useNavigate();

  return (
    <QuizList>
      <TitleText>오늘의 퀴즈</TitleText>
      {quizList.map((quiz, index) => (
        <QuizListBox onClick={() => navigate(`./${url[index]}`)}>
          <QuizNumber>4문항</QuizNumber>
          <QuizText>{quiz}</QuizText>
          <QuizText size="0.6rem">{quizDescription[index]}</QuizText>
        </QuizListBox>
      ))}
    </QuizList>
  );
}

export default Quiz;
