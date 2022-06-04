import {
  NewsContainer,
  NewsTitle,
  NewsDescriptionText,
} from "../../styles/mainStyles/NewsStyle";

function NewsSection() {
  return (
    <NewsContainer>
      <NewsTitle> 오늘의 환경 뉴스</NewsTitle>
      <NewsDescriptionText>뉴스 내용</NewsDescriptionText>
    </NewsContainer>
  );
}

export default NewsSection;
