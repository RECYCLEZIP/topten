import { useNavigate } from "react-router-dom";
import { TitleText } from "../../styles/TextStyle";
import MultiChoice from "./MultiChoice";
import OX from "./OX";
import VS from "./VS";

function Quiz() {
  const navigate = useNavigate();

  return (
    <div>
      <TitleText>오늘의 퀴즈</TitleText>
      <MultiChoice />
      <OX />
      <VS />
    </div>
  );
}

export default Quiz;
