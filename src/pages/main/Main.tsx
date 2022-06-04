import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import NewsSection from "./NewsSection";

function Main() {
  return (
    <MainContainer>
      <AiSection />
      <NewsSection />
      <CategorySection />
    </MainContainer>
  );
}

export default Main;
