import {
  QuizBox,
  QuizDescription,
  QuizNumber,
  QuizTitle,
} from "../../styles/quizStyles/QuizListStyle";

function MultiChoice() {
  return (
    <QuizBox>
      <QuizNumber>4문항</QuizNumber>
      <QuizTitle>객관식 퀴즈</QuizTitle>
      <QuizDescription>다양한 보기 중에 고르는 객관식</QuizDescription>
    </QuizBox>
  );
}

export default MultiChoice;
