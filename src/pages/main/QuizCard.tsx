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
        <RateBox>{quiz.result[0].yesterday}%</RateBox>
      </WrongPercent>
      <QuestionBox>
        <QuizImg src={quiz.image} />
        <QuizQuestion>
          <LogoImg src={img.quizLogo} />
          <CardText>{quiz.title}</CardText>
          <Button onClick={() => navigate(`${quiz._id}`)}>
            지금 바로 풀어보기
          </Button>
        </QuizQuestion>
      </QuestionBox>
    </RankContainer>
  );
}

export default QuizCard;
