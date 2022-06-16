import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
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
} from "../../styles/quizStyles/QuizResultStyle";
import { TitleText } from "../../styles/TextStyle";
import { ResultsType } from "../../types/Quiz";
import DropAnswer from "./DropAnswer";

//quiz result page
function QuizResult() {
  const navigate = useNavigate();
  const [results, setResults] = useState<ResultsType>({});
  const [isOpened, setIsOpened] = useState([false, false]);
  const toPostAnswer = useRecoilValue(toPostAnswerState);
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
        answer: toPostAnswer,
      });
      setResults(res.data);
    } catch {
      console.log("post data request fail");
    }
  };

  useEffect(() => {
    PostResults();
  }, []);

  return (
    <QuizList>
      <TitleText>결과</TitleText>
      <QuizResultCard>
        <ScoreBox>
          <ResultText margin="3%">총점</ResultText>
          <ResultText size="1.3rem" margin="0">
            {results.score}
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
