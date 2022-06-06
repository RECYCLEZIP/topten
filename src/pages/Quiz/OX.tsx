import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizDescription,
  QuizNumber,
  QuizTitle,
} from "../../styles/quizStyles/QuizListStyle";

function OX() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./ox")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizTitle>OX 퀴즈</QuizTitle>
      <QuizDescription>OX 중에 고르기</QuizDescription>
    </QuizListBox>
  );
}

export default OX;
