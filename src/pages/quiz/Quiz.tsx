import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getData } from "../../api";
import {
  currentPageState,
  currentQuizState,
  quizListState,
  toPostAnswerState,
  viewAnswerState,
} from "../../stores/atoms";
import { QuizContainer } from "../../styles/quizStyles/QuizzesStyle";
import Answer from "./Answer";
import MultiQuiz from "./MultiQuiz";
import OXQuiz from "./OXQuiz";
import QuestionCard from "./QuestionCard";
import VSQuiz from "./VSQuiz";
import { customToastify } from "../../components/customToastify";
import Loading from "../../components/Loading";

function Quiz() {
  const [loading, setLoading] = useState(false);
  const currentPage = useRecoilValue(currentPageState);
  const type = useParams().type;
  const setQuizzes = useSetRecoilState(quizListState);
  const setCurrentQuiz = useSetRecoilState(currentQuizState);
  const [toPostAnswer, setToPostAnswer] = useRecoilState(toPostAnswerState);
  const openResult = useRecoilValue(viewAnswerState);

  const getQuizzes = async () => {
    try {
      const res = await getData(`quizzes?type=${type}`);
      setQuizzes(res.data);
      setCurrentQuiz([res.data[currentPage]]);
      setToPostAnswer([]);
      setLoading(true);
    } catch {
      customToastify("error", "퀴즈 데이터를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <QuizContainer>
      <QuestionCard />
      {toPostAnswer[currentPage] && openResult ? (
        <div>문제를 풀었습니다.</div>
      ) : (
        <>
          {type === "multipleChoice" && <MultiQuiz />}
          {type === "ox" && <OXQuiz />}
          {type === "mixUp" && <VSQuiz />}
        </>
      )}
      <Answer />
    </QuizContainer>
  );
}

export default Quiz;
