import { TitleText } from "../../styles/TitleStyle";
import {
  QuizButton,
  RateText,
  SeoulImg,
} from "../../styles/mainStyles/QuizStyle";
import QuizCard from "./QuizCard";

function QuizSection() {
  return (
    <div>
      <TitleText>최근 가장 많이 틀린 퀴즈</TitleText>
      <RateText>오답률</RateText>
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizButton>전체 퀴즈 풀러가기</QuizButton>
      <SeoulImg />
    </div>
  );
}

export default QuizSection;
