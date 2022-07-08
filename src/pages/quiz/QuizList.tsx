import { QuizList } from "../../styles/quizStyles/QuizListStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  QuizListBox,
  QuizNumber,
  QuizText,
} from "../../styles/quizStyles/QuizListStyle";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "../../stores/atoms";
import { Helmet } from "react-helmet-async";

const url = ["multipleChoice", "ox", "mixUp"];
const quizList = ["객관식 퀴즈", "OX 퀴즈", "일반 vs 음식물"];
const quizDescription = [
  "다양한 보기 중에 고르는 객관식",
  "OX 중에 고르기",
  "헷갈리는 음식물과 일반 쓰레기",
];

//quiz list page
function Quiz() {
  const navigate = useNavigate();
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 퀴즈</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 퀴즈페이지"
        />
        <link rel="canonical" href="/quizzes" />
      </Helmet>
      <QuizList>
        <TitleText>오늘의 퀴즈</TitleText>
        {quizList.map((quiz, index) => (
          <QuizListBox
            onClick={() => {
              navigate(`./${url[index]}`);
              setCurrentPage(0);
            }}
            key={index}
          >
            <QuizNumber>4문항</QuizNumber>
            <QuizText>{quiz}</QuizText>
            <QuizText size="0.6rem">{quizDescription[index]}</QuizText>
          </QuizListBox>
        ))}
      </QuizList>
    </>
  );
}

export default Quiz;
