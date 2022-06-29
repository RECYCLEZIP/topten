import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { postData } from "../../api";
import { currentQuizState, toPostAnswerState } from "../../stores/atoms";
import { QuizList } from "../../styles/quizStyles/QuizListStyle";
import {
  QuizResultCard,
  ResultBottom,
  ResultButton,
  ResultList,
  ResultText,
  ScoreBox,
  ScoreText,
} from "../../styles/quizStyles/QuizResultStyle";
import { TitleText } from "../../styles/TextStyle";
import { ResultsType } from "../../types/Quiz";
import DropAnswer from "./DropAnswer";
import { customTostify } from "../../components/customTostify";

//quiz result page
function QuizResult() {
  const navigate = useNavigate();
  const [results, setResults] = useState<ResultsType[]>([]);
  const [score, setScore] = useState(0);
  const [isOpened, setIsOpened] = useState([false, false]);
  const [toPostAnswer, setToPostAnswer] = useRecoilState(toPostAnswerState);
  const [loading, setLoading] = useState(false);
  const currentQuiz = useRecoilValue(currentQuizState);

  //toggle open or not
  const clickHandler = (idx: number) => {
    const newArr: boolean[] = [...isOpened];
    newArr[idx] = newArr[idx] ? false : true;
    setIsOpened(newArr);
  };

  const PostResults = async () => {
    try {
      const res = await postData(`quizzes/submission`, {
        type: currentQuiz[0].type,
        answers: toPostAnswer,
      });
      setResults(res.data.result);
      setScore(res.data.score);
    } catch (err: any) {
      customTostify("error", err.message);
    }
    setLoading(true);
    setToPostAnswer([]);
  };

  useEffect(() => {
    PostResults();
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <QuizList>
      <TitleText>결과</TitleText>
      <QuizResultCard>
        {results.map((result, index) => (
          <div key={index}>
            <ResultList>
              <ResultText>{index + 1}번</ResultText>
              {result.isCorrect ? (
                <ResultText width="70%" color="#21a663">
                  맞았습니다!{" "}
                </ResultText>
              ) : (
                <ResultText width="70%" color="#ce1b1b">
                  틀렸습니다!
                </ResultText>
              )}
              <ResultButton onClick={() => clickHandler(index)}>
                {isOpened[index] ? "문제 닫기" : "문제 보기"}
              </ResultButton>
            </ResultList>
            {isOpened[index] && <DropAnswer index={index} />}
          </div>
        ))}

        <ScoreBox>
          <ScoreText>총점</ScoreText>
          <ScoreText size="1.3rem" margin="0">
            {score}
          </ScoreText>
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
