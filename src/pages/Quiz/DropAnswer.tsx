import {
  AnswerCard,
  AnswerDescription,
  AnswerProblem,
  AnswerText,
} from "../../styles/quizStyles/QuizResultStyle";
import { LogoImg, QuizImg } from "../../styles/mainStyles/QuizStyle";
import { img } from "../../assets/imgImport";
import { QuizQuestion } from "../../styles/quizStyles/QuizzesStyle";
import { CardText } from "../../styles/TextStyle";

// drop quiz answer card component
function DropAnswer() {
  return (
    <AnswerCard>
      <AnswerProblem>
        <QuizImg src={img.sample} />
        <QuizQuestion>
          <LogoImg src={img.quizLogoB} />
          <CardText color="black">
            어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라
            어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
          </CardText>
        </QuizQuestion>
      </AnswerProblem>
      <AnswerDescription>
        <AnswerText>정답</AnswerText>
        <AnswerText size="0.5rem" color="#7a7a7a" margin="3%">
          뚜껑과 라벨을 어쩌구저쩌구
        </AnswerText>
        <AnswerText>해설</AnswerText>
        <AnswerText size="0.5rem" color="#7a7a7a">
          뚜껑과 라벨을 어쩌구저쩌구
        </AnswerText>
      </AnswerDescription>
    </AnswerCard>
  );
}

export default DropAnswer;
