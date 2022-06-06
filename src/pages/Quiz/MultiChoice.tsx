import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizDescription,
  QuizNumber,
  QuizTitle,
} from "../../styles/quizStyles/QuizListStyle";

function MultiChoice() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./multiple-choice")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizTitle>객관식 퀴즈</QuizTitle>
      <QuizDescription>다양한 보기 중에 고르는 객관식</QuizDescription>
    </QuizListBox>
  );
}

export default MultiChoice;
