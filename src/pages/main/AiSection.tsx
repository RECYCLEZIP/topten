import { CardText } from "../../styles/TextStyle";
import {
  AiContainer,
  AiImg,
  AiDescription,
} from "../../styles/mainStyles/AiStyle";
import { img } from "../../assets/imgImport";
import { Button } from "../../styles/ButtonStyles";

function AiSection() {
  return (
    <AiContainer>
      <AiImg src={img.mainAI} />
      <AiDescription>
        <CardText>어떻게 분류할까?</CardText>
        <CardText>헷갈리면 도와드려요</CardText>
        <Button>AI로 한 번에 분류하기</Button>
      </AiDescription>
    </AiContainer>
  );
}

export default AiSection;
