import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
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
import {
  BackButton,
  BackIcon,
  LogoImg,
  QuizImg,
} from "../../styles/mainStyles/QuizStyle";
import { img } from "../../assets/imgImport";
import { CardText } from "../../styles/TextStyle";
import { customToastify } from "../../components/customToastify";
import Loading from "../../components/Loading";

function WrongQuiz() {
  const navigate = useNavigate();
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
      setLoading(true);
    } catch {
      customToastify("error", "퀴즈 데이터를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    getQuiz();
    setToPostAnswer([]);
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <QuizContainer>
      <BackButton onClick={() => navigate("/")}>
        <BackIcon src={img.backPage} /> 뒤로 가기
      </BackButton>
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
