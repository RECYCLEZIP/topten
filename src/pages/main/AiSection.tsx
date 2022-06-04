import {
  AiContainer,
  AiImg,
  AiDescription,
  MainText,
} from "../../styles/mainStyles/MainStyle";
import { img } from "../../assets/imgImport";
import { Button } from "../../styles/ButtonStyle";

function AiSection() {
  return (
    <AiContainer>
      <AiImg src={img.mainAI} />
      <AiDescription>
        <MainText>어떻게 분류할까?</MainText>
        <MainText>헷갈리면 도와드려요</MainText>
        <Button>AI로 한 번에 분류하기</Button>
      </AiDescription>
    </AiContainer>
  );
}

export default AiSection;
