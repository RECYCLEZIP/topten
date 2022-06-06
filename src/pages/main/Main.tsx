import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import NewsSection from "./NewsSection";
import QuizSection from "./QuizSection";

function Main() {
  return (
    <MainContainer>
      <AiSection />
      <NewsSection />
      <CategorySection />
      <QuizSection />
    </MainContainer>
  );
}

export default Main;
