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
import { NewsType } from "../../types/Main";
import Loading from "../../components/Loading";

function Main() {
  // main page component
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<NewsType[]>([]);
  const setIsSelected = useSetRecoilState(categorySelectedState);

  const getNews = async () => {
    try {
      const res = await getData(`news`);
      setNews(res.data);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
    setIsLoading(true);
  };

  useEffect(() => {
    getNews();
    setIsSelected([]);
  }, []);

  if (!isLoading) {
    return <Loading />;
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
        <NewsSection news={news} />
        <CategorySection />
        <QuizSection />
        <MapSection />
      </MainContainer>
    </>
  );
}

export default Main;
