import { useNavigate } from "react-router-dom";
import {
  QuizListBox,
  QuizNumber,
  QuizText,
} from "../../styles/quizStyles/QuizListStyle";

function VS() {
  const navigate = useNavigate();

  return (
    <QuizListBox onClick={() => navigate("./vs")}>
      <QuizNumber>4문항</QuizNumber>
      <QuizText>음식물 vs 일반</QuizText>
      <QuizText size="0.6rem">헷갈리는 음식물과 일반 쓰레기</QuizText>
    </QuizListBox>
  );
}

export default VS;
