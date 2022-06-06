import {
  QuizBox,
  QuizContainer,
  QuizImg,
} from "../../styles/mainStyles/QuizStyle";
import {
  Icons,
  QuizCount,
  QuizNumber,
  QuizOption,
} from "../../styles/quizStyles/QuizzesStyle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CardText } from "../../styles/TextStyle";
import { useState } from "react";

function MultiQuiz() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((cur: boolean) => !cur);
  };

  return (
    <QuizContainer>
      <QuizCount>1/4</QuizCount>
      <QuizBox>
        <QuizImg src="/PETs.jpg" />
        <CardText>퀴즈 내용입니다.</CardText>
      </QuizBox>
      <Icons>
        <ChevronLeftIcon
          style={{ color: "#9EACBA", fontSize: "2rem", cursor: "pointer" }}
        />
        <ChevronRightIcon
          style={{ color: "#9EACBA", fontSize: "2rem", cursor: "pointer" }}
        />
      </Icons>
      <QuizOption onClick={clickHandler} isClick={click}>
        <QuizNumber isClick={click}>1. </QuizNumber>안녕하세요.
      </QuizOption>
      <QuizOption onClick={clickHandler} isClick={click}>
        <QuizNumber isClick={click}>2. </QuizNumber>안녕하세요.
      </QuizOption>
      <QuizOption onClick={clickHandler} isClick={click}>
        <QuizNumber isClick={click}>3. </QuizNumber>안녕하세요.
      </QuizOption>
    </QuizContainer>
  );
}

export default MultiQuiz;
