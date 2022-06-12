import { useEffect, useState } from "react";
import { getData } from "../../api";
import {
  Container,
  NewsText,
  NewsTitle,
  NewsContainer,
  AutoSlide,
} from "../../styles/mainStyles/NewsStyle";
import { NewsType } from "../../types/Main";

// main page news section
function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const getNews = async () => {
        const res = await getData(`news`);
        setNews(res.data);
      };
      getNews();
    } catch (err) {
      console.log("Error: award list get request fail", err);
    }
  }, []);

  return (
    <Container>
      <NewsText> 오늘의 환경 뉴스</NewsText>
      <NewsContainer>
        <AutoSlide>
          {news.map((list: NewsType, index) => (
            <NewsTitle href={list.url} target="_blank">
              {list.title}
            </NewsTitle>
          ))}
        </AutoSlide>
      </NewsContainer>
    </Container>
  );
}

export default NewsSection;
