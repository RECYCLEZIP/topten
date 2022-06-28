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
import { QuizCardType } from "../../types/Quiz";
import { useNavigate } from "react-router";
import CountUp from "react-countup";

/** main page quiz card component
 *
 * @param {"none"} display visible or not
 * @returns
 */
function QuizCard({ display, quiz }: QuizCardType) {
  const navigate = useNavigate();

  return (
    <RankContainer>
      <WrongPercent>
        <RateText display={display}>오답률</RateText>
        <RateBox>
          <CountUp end={Math.round(quiz.result[0].yesterday)} duration={3} />%
        </RateBox>
      </WrongPercent>
      <QuestionBox width="90">
        <QuizImg src={quiz.image} />
        <QuizQuestion width="80">
          <LogoImg src={img.quizLogo} />
          <CardText>{quiz.title}</CardText>
          <Button onClick={() => navigate(`/quiz/${quiz._id}`)}>
            지금 바로 풀어보기
          </Button>
        </QuizQuestion>
      </QuestionBox>
    </RankContainer>
  );
}

export default QuizCard;
