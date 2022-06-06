import { CardText } from "../../styles/TitleStyle";
import {
  QuizBox,
  QuizImg,
  PercentText,
  RateBox,
} from "../../styles/mainStyles/QuizStyle";
import { Button } from "../../styles/ButtonStyle";

function QuizCard() {
  return (
    <>
      <RateBox>
        <PercentText>80%</PercentText>
      </RateBox>
      <QuizBox>
        <QuizImg src="./PETs.jpg" />
        <CardText>퀴즈 내용입니다.</CardText>
        <Button>지금 바로 풀어보기</Button>
      </QuizBox>
    </>
  );
}

export default QuizCard;
