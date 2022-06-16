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
    } catch {
      console.log("Error: data get request fail");
    }
    setLoading(true);
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <QuizContainer>
      <QuestionCard />
      {toPostAnswer[currentPage] && openResult ? (
        <div>이미 푼 문제입니다.</div>
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
