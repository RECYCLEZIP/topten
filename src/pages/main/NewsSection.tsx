import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { newsState } from "../../stores/atoms";
import {
  Container,
  NewsText,
  NewsTitle,
  NewsContainer,
  AutoSlide,
} from "../../styles/mainStyles/NewsStyle";
import { NewsType } from "../../types/Main";

// main page news section
function NewsSection({ news }: { news: NewsType[] }) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!slideRef.current) {
        return;
      }
      if (isHover) return;

      slideRef.current.style.transition = `all 0.5s ease-in-out`;
      slideRef.current.style.transform = `translateY(-${slideIndex}00%)`;

      if (slideIndex === news.length) {
        setTimeout(() => {
          if (!slideRef.current) {
            return;
          }
          slideRef.current.style.transition = `0s`;
          slideRef.current.style.transform = `translateY(0)`;
        }, 501);
        setSlideIndex(1);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [news, slideIndex, isHover]);

  return (
    <Container>
      <NewsText> 오늘의 환경 뉴스</NewsText>
      <NewsContainer>
        <AutoSlide
          ref={slideRef}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {news.map((list, index) => (
            <NewsTitle key={index} href={list.url} target="_blank">
              {list.title}
            </NewsTitle>
          ))}
          <NewsTitle href={news[0].url} target="_blank">
            {news[0].title}
          </NewsTitle>
        </AutoSlide>
      </NewsContainer>
    </Container>
  );
}

export default NewsSection;
