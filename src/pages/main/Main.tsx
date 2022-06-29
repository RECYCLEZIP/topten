import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { categorySelectedState, newsState } from "../../stores/atoms";
import { MainContainer } from "../../styles/mainStyles/MainStyle";
import AiSection from "./AiSection";
import CategorySection from "./CategorySection";
import MapSection from "./MapSection";
import NewsSection from "./NewsSection";
import QuizSection from "./QuizSection";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";

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
      customToastify("error", err.message);
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
    <>
      <Helmet>
        <title>분리수ZIP - 메인</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 메인페이지"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <MainContainer>
        <AiSection />
        <NewsSection />
        <CategorySection />
        <QuizSection />
        <MapSection />
      </MainContainer>
    </>
  );
}

export default Main;
