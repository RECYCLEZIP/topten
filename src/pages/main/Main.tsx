import { Helmet } from "react-helmet";
import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import MapSection from "./MapSection";
import NewsSection from "./NewsSection";
import QuizSection from "./QuizSection";

// main page component
function Main() {
  return (
    <MainContainer>
      <Helmet>
        <title>분리수집</title>
      </Helmet>
      <AiSection />
      <NewsSection />
      <CategorySection />
      <QuizSection />
      <MapSection />
    </MainContainer>
  );
}

export default Main;
