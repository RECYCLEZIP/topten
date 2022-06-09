import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizNumber,
  QuizText,
} from "../../styles/quizStyles/QuizListStyle";

function MultiChoice() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./multiple-choice")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizText>객관식 퀴즈</QuizText>
      <QuizText size="0.6rem">다양한 보기 중에 고르는 객관식</QuizText>
    </QuizListBox>
  );
}

export default MultiChoice;
