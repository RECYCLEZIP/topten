import { CardText } from "../../styles/TextStyle";
import {
  QuizImg,
  RateBox,
  RateText,
  RankContainer,
  WrongPercent,
  LogoImg,
} from "../../styles/mainStyles/QuizStyle";
import { Button } from "../../styles/ButtonStyles";
import {
  QuestionBox,
  QuizQuestion,
} from "../../styles/quizStyles/QuizzesStyle";
import { img } from "../../assets/imgImport";

/** main page quiz card component
 *
 * @param {"none"} display visible or not
 * @returns
 */
function QuizCard({ display }: { display?: "none" }) {
  return (
    <RankContainer>
      <WrongPercent>
        <RateText display={display}>오답률</RateText>
        <RateBox>80%</RateBox>
      </WrongPercent>
      <QuestionBox>
        <QuizImg src={img.sample} />
        <QuizQuestion>
          <LogoImg src={img.quizLogo} />
          <CardText>퀴즈 내용입니다.</CardText>
          <Button>지금 바로 풀어보기</Button>
        </QuizQuestion>
      </QuestionBox>
    </RankContainer>
  );
}

export default QuizCard;
