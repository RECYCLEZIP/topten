import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizText,
  QuizNumber,
} from "../../styles/quizStyles/QuizListStyle";

function OX() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./ox")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizText>OX 퀴즈</QuizText>
      <QuizText size="0.6rem">OX 중에 고르기</QuizText>
    </QuizListBox>
  );
}

export default OX;
