import { CardText } from "../../styles/TextStyle";
import {
  QuizBox,
  QuizImg,
  PercentText,
  RateBox,
  RankContainer,
  RateText,
} from "../../styles/mainStyles/QuizStyle";
import { Button } from "../../styles/ButtonStyle";

function QuizCard({ display }: { display?: string }) {
  return (
    <RankContainer>
      <RateText display={display}>오답률</RateText>
      <RateBox>
        <PercentText>80%</PercentText>
      </RateBox>
      <QuizBox>
        <QuizImg src="./PETs.jpg" />
        <CardText>퀴즈 내용입니다.</CardText>
        <Button>지금 바로 풀어보기</Button>
      </QuizBox>
    </RankContainer>
  );
}

export default QuizCard;
