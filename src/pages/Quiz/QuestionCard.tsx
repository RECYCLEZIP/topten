import { img } from "../../assets/imgImport";
import { LogoImg, QuizImg } from "../../styles/mainStyles/QuizStyle";
import {
  Icons,
  MoveButton,
  SubmitButton,
  MoveText,
  QuestionBox,
  QuizCount,
  QuizQuestion,
} from "../../styles/quizStyles/QuizzesStyle";
import { CardText } from "../../styles/TextStyle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

function QuestionCard() {
  const [count, setCount] = useState(1);

  return (
    <>
      <QuizCount>{count}/4</QuizCount>
      <QuestionBox>
        <QuizImg src={img.sample} />
        <QuizQuestion>
          <LogoImg src={img.quizLogo} />
          <CardText>
            어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라
            어쩌구 저쩌구 블라블라어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
          </CardText>
        </QuizQuestion>
      </QuestionBox>
      <Icons>
        <MoveButton count={count} onClick={() => setCount((cur) => cur - 1)}>
          <ChevronLeftIcon style={{ color: "#9EACBA", fontSize: "2rem" }} />
          <MoveText>이전 문제</MoveText>
        </MoveButton>
        {count !== 4 ? (
          <MoveButton onClick={() => setCount((cur) => cur + 1)}>
            <MoveText>다음 문제</MoveText>
            <ChevronRightIcon style={{ color: "#9EACBA", fontSize: "2rem" }} />
          </MoveButton>
        ) : (
          <SubmitButton>결과확인</SubmitButton>
        )}
      </Icons>
    </>
  );
}

export default QuestionCard;
