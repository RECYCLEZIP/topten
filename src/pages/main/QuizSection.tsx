import { TitleText } from "../../styles/TextStyle";
import { QuizButton, QuizLank } from "../../styles/mainStyles/QuizStyle";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";
import { getData } from "../../api";
import { useEffect, useState } from "react";
import { QuizType } from "../../types/Quiz";

// main page quiz section component
function QuizSection() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  const getWrongRank = async () => {
    try {
      const res = await getData("quizzes/wrong");
      console.log(res.data);
      setQuizzes(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
  };

  useEffect(() => {
    getWrongRank();
  }, []);

  return (
    <QuizLank>
      <TitleText>최근 가장 많이 틀린 퀴즈</TitleText>
      {quizzes.map((quiz, index) =>
        index !== 0 ? (
          <QuizCard display="none" quiz={quiz} />
        ) : (
          <QuizCard quiz={quiz} />
        ),
      )}
      <QuizButton onClick={() => navigate("/quizzes")}>
        전체 퀴즈 풀러가기
      </QuizButton>
    </QuizLank>
  );
}

export default QuizSection;
