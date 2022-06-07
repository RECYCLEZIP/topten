import { useState } from "react";
import { QuizContainer } from "../../styles/mainStyles/QuizStyle";
import {
  CorrectAnswer,
  TwoOption,
  TwoOptions,
} from "../../styles/quizStyles/QuizzesStyle";
import QuestionCard from "./QuestionCard";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function OXQuiz() {
  const [oState, setOState] = useState(false);
  const [xState, setXState] = useState(false);

  return (
    <QuizContainer>
      <QuestionCard />
      <TwoOptions>
        <TwoOption onClick={() => setOState((cur) => !cur)} isClick={oState}>
          <CircleOutlinedIcon style={{ fontSize: "5rem" }} />
        </TwoOption>
        <TwoOption onClick={() => setXState((cur) => !cur)} isClick={xState}>
          <ClearIcon style={{ fontSize: "6rem" }} />
        </TwoOption>
      </TwoOptions>
      <CorrectAnswer>정답 확인</CorrectAnswer>
    </QuizContainer>
  );
}

export default OXQuiz;
