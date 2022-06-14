import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { newsState } from "../../stores/atoms";
import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import MapSection from "./MapSection";
import NewsSection from "./NewsSection";
import QuizSection from "./QuizSection";

function Main() {
  // main page component
  const [isLoading, setIsLoading] = useState(false);

  const setNews = useSetRecoilState(newsState);

  const getNews = async () => {
    try {
      const res = await getData(`news`);
      setNews(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
    setIsLoading(true);
  };

  useEffect(() => {
    getNews();
  }, []);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

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
