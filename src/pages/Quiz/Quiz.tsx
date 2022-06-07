import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import { TitleText } from "../../styles/TextStyle";
import MultiChoice from "./MultiChoice";
import OX from "./OX";
import VS from "./VS";

function Quiz() {
  return (
    <QuizContainer>
      <TitleText>오늘의 퀴즈</TitleText>
      <MultiChoice />
      <OX />
      <VS />
    </QuizContainer>
  );
}

export default Quiz;
