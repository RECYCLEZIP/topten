import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizDescription,
  QuizNumber,
  QuizTitle,
} from "../../styles/quizStyles/QuizListStyle";

function VS() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./vs")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizTitle>음식물 vs 일반</QuizTitle>
      <QuizDescription>헷갈리는 음식물과 일반 쓰레기</QuizDescription>
    </QuizListBox>
  );
}

export default VS;
