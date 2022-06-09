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
import { useNavigate } from "react-router-dom";

function QuestionCard() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

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
        <MoveButton
          count={count}
          onClick={() => {
            setCount((cur) => cur - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ChevronLeftIcon style={{ color: "#9EACBA", fontSize: "2rem" }} />
          <MoveText>이전 문제</MoveText>
        </MoveButton>
        <MoveButton
          onClick={() => {
            if (count === 4) {
              navigate("/quizzes/result");
            }
            setCount((cur) => cur + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <MoveText>{count === 4 ? "결과 확인" : "다음 문제"}</MoveText>
          <ChevronRightIcon style={{ color: "#9EACBA", fontSize: "2rem" }} />
        </MoveButton>
      </Icons>
    </>
  );
}

export default QuestionCard;
