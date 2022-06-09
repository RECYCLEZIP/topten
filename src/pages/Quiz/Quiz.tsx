import { QuizList } from "../../styles/quizStyles/QuizListStyle";
import { TitleText } from "../../styles/TextStyle";
import MultiChoice from "./MultiChoice";
import OX from "./OX";
import VS from "./VS";

function Quiz() {
  return (
    <QuizList>
      <TitleText>오늘의 퀴즈</TitleText>
      <MultiChoice />
      <OX />
      <VS />
    </QuizList>
  );
}

export default Quiz;
