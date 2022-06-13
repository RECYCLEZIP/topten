import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizList } from "../../styles/quizStyles/QuizListStyle";
import {
  QuizResultCard,
  ResultBottom,
  ResultButton,
  ResultList,
  ResultText,
  ScoreBox,
} from "../../styles/quizStyles/QuizResultStyle";
import { TitleText } from "../../styles/TextStyle";
import DropAnswer from "./DropAnswer";

//quiz result page
function QuizResult() {
  const navigate = useNavigate();
  const results = [true, false];
  const [isOpened, setIsOpened] = useState([false, false]);

  //toggle open or not
  const clickHandler = (idx: number) => {
    const newArr: boolean[] = [...isOpened];
    newArr[idx] = newArr[idx] ? false : true;
    setIsOpened(newArr);
  };

  return (
    <QuizList>
      <TitleText>결과</TitleText>
      <QuizResultCard>
        {results.map((result, index) => {
          return (
            <div key={index}>
              <ResultList>
                <ResultText>{index + 1}번</ResultText>
                {result ? (
                  <ResultText margin="50%">맞았습니다! </ResultText>
                ) : (
                  <ResultText margin="50%" color="#ce1b1b">
                    틀렸습니다!
                  </ResultText>
                )}
                <ResultButton onClick={() => clickHandler(index)}>
                  {isOpened[index] ? "문제 닫기" : "문제 보기"}
                </ResultButton>
              </ResultList>
              {isOpened[index] && <DropAnswer />}
            </div>
          );
        })}
        <ScoreBox>
          <ResultText margin="3%">총점</ResultText>
          <ResultText size="1.3rem" margin="0">
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
    </QuizList>
  );
}

export default QuizResult;
