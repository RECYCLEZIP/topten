import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { categorySelectedState, newsState } from "../../stores/atoms";
import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import MapSection from "./MapSection";
import NewsSection from "./NewsSection";
import QuizSection from "./QuizSection";
import { customTostify } from "../../components/customTostify";

function Main() {
  // main page component
  const [isLoading, setIsLoading] = useState(false);
  const setNews = useSetRecoilState(newsState);
  const setIsSelected = useSetRecoilState(categorySelectedState);

  const getNews = async () => {
    try {
      const res = await getData(`news`);
      setNews(res.data);
    } catch (err: any) {
      customTostify("error", err.message);
    }
    setIsLoading(true);
  };

  useEffect(() => {
    getNews();
    setIsSelected([]);
  }, []);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <Helmet>
        <title>분리수ZIP</title>
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
