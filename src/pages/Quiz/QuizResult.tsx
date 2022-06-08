import { useNavigate } from "react-router-dom";
import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import {
  QuizResultCard,
  ResultBottom,
  ResultButton,
  ResultList,
  ResultText,
  ScoreBox,
} from "../../styles/quizStyles/QuizResultStyle";
import { TitleText } from "../../styles/TextStyle";

function QuizResult() {
  const navigate = useNavigate();

  return (
    <QuizContainer>
      <TitleText>결과</TitleText>
      <QuizResultCard>
        <ResultList>
          <ResultText>1번</ResultText>
          <ResultText margin="60%">맞았습니다!</ResultText>
          <ResultButton>문제 보기</ResultButton>
        </ResultList>
        <ResultList>
          <ResultText>2번</ResultText>
          <ResultText margin="60%" color="#ce1b1b">
            틀렸습니다!
          </ResultText>
          <ResultButton>문제 보기</ResultButton>
        </ResultList>
        <ResultList>
          <ResultText>3번</ResultText>
          <ResultText margin="60%" color="#ce1b1b">
            틀렸습니다!
          </ResultText>
          <ResultButton>문제 보기</ResultButton>
        </ResultList>
        <ResultList>
          <ResultText>4번</ResultText>
          <ResultText margin="60%" color="#ce1b1b">
            틀렸습니다!
          </ResultText>
          <ResultButton>문제 보기</ResultButton>
        </ResultList>
        <ScoreBox>
          <ResultText margin="3%">총점</ResultText>
          <ResultText size="1.5rem" margin="0">
            25
          </ResultText>
        </ScoreBox>
        <ResultBottom>
          <ResultButton
            onClick={() => navigate("/quizzes")}
            background="#21a663"
          >
            목록으로
          </ResultButton>
        </ResultBottom>
      </QuizResultCard>
    </QuizContainer>
  );
}

export default QuizResult;
