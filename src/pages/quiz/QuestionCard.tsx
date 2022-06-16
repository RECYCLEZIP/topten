import { img } from "../../assets/imgImport";
import { LogoImg, QuizImg } from "../../styles/mainStyles/QuizStyle";
import {
  Icons,
  MoveButton,
  MoveText,
  QuestionBox,
  QuizCount,
  QuizQuestion,
} from "../../styles/quizStyles/QuizzesStyle";
import { CardText } from "../../styles/TextStyle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentPageState,
  currentQuizState,
  quizListState,
  selectedAnswerState,
  toPostAnswerState,
} from "../../stores/atoms";
import { useEffect } from "react";

//quiz question card component
function QuestionCard() {
  const navigate = useNavigate();
  const setIsSelected = useSetRecoilState(selectedAnswerState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [currentQuiz, setCurrentQuiz] = useRecoilState(currentQuizState);
  const quizzes = useRecoilValue(quizListState);
  const toPostAnswer = useRecoilValue(toPostAnswerState);

  const initialization = () => {
    setIsSelected([false]);
    setCurrentQuiz([quizzes[currentPage]]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    initialization();
  }, [currentPage]);

  //퀴즈 데이터가 들어오면 map 처리
  return (
    <>
      <QuizCount>{currentPage + 1}/4</QuizCount>
      <QuestionBox>
        <QuizImg src={currentQuiz[0].image} />
        <QuizQuestion>
          <LogoImg src={img.quizLogo} />
          <CardText>{currentQuiz[0].title}</CardText>
        </QuizQuestion>
      </QuestionBox>
      <Icons>
        <MoveButton
          count={currentPage + 1}
          onClick={() => {
            setCurrentPage((cur) => cur - 1);
          }}
        >
          <ChevronLeftIcon style={{ color: "#9EACBA", fontSize: "1.3rem" }} />
          <MoveText>이전 문제</MoveText>
        </MoveButton>
        <MoveButton
          onClick={() => {
            if (currentPage + 1 === 4) {
              if (toPostAnswer.length !== 4) {
                return alert("모든 문제를 풀어주세요!");
              }
              navigate("/quizzes/result");
              setCurrentPage(-1);
            }
            setCurrentPage((cur) => cur + 1);
          }}
        >
          <MoveText>
            {currentPage + 1 === 4 ? "결과 확인" : "다음 문제"}
          </MoveText>
          <ChevronRightIcon style={{ color: "#9EACBA", fontSize: "1.3rem" }} />
        </MoveButton>
      </Icons>
    </>
  );
}

export default QuestionCard;
