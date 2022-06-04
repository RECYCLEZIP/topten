import {
  MainContainer,
  NewsSection,
  TitleText,
} from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";

function Main() {
  return (
    <MainContainer>
      <AiSection />
      <NewsSection>
        <TitleText>오늘의 환경 뉴스</TitleText>
      </NewsSection>
    </MainContainer>
  );
}

export default Main;
