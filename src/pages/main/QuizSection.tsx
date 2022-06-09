import { TitleText } from "../../styles/TextStyle";
import { QuizButton, RateText } from "../../styles/mainStyles/QuizStyle";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";

function QuizSection() {
  const navigate = useNavigate();

  return (
    <>
      <TitleText>최근 가장 많이 틀린 퀴즈</TitleText>
      <QuizCard />
      <QuizCard display="none" />
      <QuizCard display="none" />
      <QuizButton onClick={() => navigate("/quizlist")}>
        전체 퀴즈 풀러가기
      </QuizButton>
    </>
  );
}

export default QuizSection;
