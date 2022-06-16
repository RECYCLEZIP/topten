import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { currentQuizState, toPostAnswerState } from "../../stores/atoms";
import { QuizContainer } from "../../styles/quizStyles/QuizzesStyle";
import Answer from "./Answer";
import MultiQuiz from "./MultiQuiz";
import OXQuiz from "./OXQuiz";
import VSQuiz from "./VSQuiz";
import {
  QuestionBox,
  QuizQuestion,
} from "../../styles/quizStyles/QuizzesStyle";
import { LogoImg, QuizImg } from "../../styles/mainStyles/QuizStyle";
import { img } from "../../assets/imgImport";
import { CardText } from "../../styles/TextStyle";

function WrongQuiz() {
  const [loading, setLoading] = useState(false);
  const id = useParams().id;
  const [type, setType] = useState("");
  const [currentQuiz, setCurrentQuiz] = useRecoilState(currentQuizState);
  const setToPostAnswer = useSetRecoilState(toPostAnswerState);

  const getQuiz = async () => {
    try {
      const res = await getData(`quizzes/${id}`);
      setCurrentQuiz([res.data]);
      setType(res.data.type);
    } catch {
      console.log("data get request fail");
    }
    setLoading(true);
  };

  useEffect(() => {
    getQuiz();
    setToPostAnswer([]);
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <QuizContainer>
      <QuestionBox>
        <QuizImg src={currentQuiz[0].image} />
        <QuizQuestion>
          <LogoImg src={img.quizLogo} />
          <CardText>{currentQuiz[0].title}</CardText>
        </QuizQuestion>
      </QuestionBox>
      {type === "multipleChoice" && <MultiQuiz />}
      {type === "ox" && <OXQuiz />}
      {type === "mixUp" && <VSQuiz />}
      <Answer />
    </QuizContainer>
  );
}

export default WrongQuiz;
