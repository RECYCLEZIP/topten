import { TitleText } from "../../styles/TextStyle";
import { QuizButton, QuizLank } from "../../styles/mainStyles/QuizStyle";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";
import { getData } from "../../api";
import { useEffect, useState } from "react";
import { QuizType } from "../../types/Quiz";
import { customToastify } from "../../components/customToastify";

// main page quiz section component
function QuizSection() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(false);

  const getWrongRank = async () => {
    try {
      const res = await getData("quizzes/wrong");
      setQuizzes(res.data);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
    setLoading(true);
  };

  useEffect(() => {
    getWrongRank();
  }, []);

  if (!loading) {
    return <></>;
  }

  return (
    <QuizLank>
      <TitleText>최근 가장 많이 틀린 퀴즈</TitleText>
      {quizzes.map((quiz, index) =>
        index !== 0 ? (
          <QuizCard display="none" quiz={quiz} key={index} />
        ) : (
          <QuizCard quiz={quiz} key={index} />
        ),
      )}
      <QuizButton onClick={() => navigate("/quizzes")}>
        전체 퀴즈 풀러가기
      </QuizButton>
    </QuizLank>
  );
}

export default QuizSection;
