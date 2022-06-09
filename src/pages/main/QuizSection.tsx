import { TitleText } from "../../styles/TextStyle";
import {
  QuizButton,
  QuizLank,
  RateText,
} from "../../styles/mainStyles/QuizStyle";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";

function QuizSection() {
  const navigate = useNavigate();
  return (
    <QuizLank>
      <TitleText>최근 가장 많이 틀린 퀴즈</TitleText>
      <RateText>오답률</RateText>
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizButton onClick={() => navigate("/quizzes")}>
        전체 퀴즈 풀러가기
      </QuizButton>
    </QuizLank>
  );
}

export default QuizSection;
