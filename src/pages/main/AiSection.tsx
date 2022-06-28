import { AiContainer, AiImg, AiText } from "../../styles/mainStyles/AiStyle";
import { img } from "../../assets/imgImport";
import { Button } from "../../styles/ButtonStyles";
import { useNavigate } from "react-router";

// main page ai section
function AiSection() {
  const navigate = useNavigate();

  return (
    <AiContainer>
      <AiImg src={img.mainAI} />
      <div>
        <AiText>어떻게 분류할까?</AiText>
        <AiText>헷갈리면 도와드려요</AiText>
        <Button onClick={() => navigate("./ai")}>AI로 한 번에 분류하기</Button>
      </div>
    </AiContainer>
  );
}

export default AiSection;
