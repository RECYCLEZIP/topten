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
import { useRecoilValue } from "recoil";
import { quizListState } from "../../stores/atoms";

// drop quiz answer card component
function DropAnswer({ index }: { index: number }) {
  const quizzes = useRecoilValue(quizListState);
  const quiz = quizzes[index];
  const type = quizzes[0].type;

  return (
    <AnswerCard>
      <AnswerProblem>
        <QuizImg src={quiz.image} />
        <QuizQuestion>
          <LogoImg src={img.quizLogoB} />
          <CardText color="black">{quiz.title}</CardText>
        </QuizQuestion>
      </AnswerProblem>
      <AnswerDescription>
        <AnswerText margin="0.3rem">정답</AnswerText>
        <AnswerText size="0.5rem" color="#7a7a7a" width="3%">
          {quiz.answer}{" "}
          {type === "multipleChoice" && `${quiz.options[Number(quiz.answer)]}`}
        </AnswerText>
        <AnswerText margin="0.3rem">해설</AnswerText>
        <AnswerText size="0.5rem" color="#7a7a7a">
          {quiz.description}
        </AnswerText>
      </AnswerDescription>
    </AnswerCard>
  );
}

export default DropAnswer;
