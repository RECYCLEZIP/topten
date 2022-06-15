import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { CorrectAnswer } from "../../styles/quizStyles/QuizzesStyle";
import { AlertType } from "../../types/Quiz";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import { answerState, currentQuizState } from "../../stores/atoms";
import { postData } from "../../api";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

function AnswerAlert({ setResult }: AlertType) {
  const [open, setOpen] = useState(false);
  const option = useRecoilValue(answerState);
  const currentQuiz = useRecoilValue(currentQuizState)[0];

  console.log(currentQuiz);

  const handleClose = () => {
    setOpen(false);
    setResult((cur) => !cur);
  };

  const CheckAnswer = async () => {
    if (option === "-1") return alert("답을 선택해주세요!");
    try {
      const res = await postData(`quizzes/${currentQuiz._id}/submission`, {
        answer: option,
      });
      console.log(res);
    } catch {
      console.log("put data request fail");
    }
    setOpen((cur) => !cur);
  };

  return (
    <Stack spacing={2}>
      <CorrectAnswer onClick={() => CheckAnswer()}>정답 확인</CorrectAnswer>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert
          action={
            <IconButton color="inherit">
              <CloseIcon
                fontSize="inherit"
                sx={{ height: "0.9rem", width: "0.9rem" }}
                onClick={() => handleClose()}
              />
            </IconButton>
          }
          onClose={handleClose}
          severity={option ? "success" : "error"}
          sx={{ fontSize: "0.7rem" }}
          icon={false}
        >
          {option ? "정답입니다!" : "틀렸습니다!"}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AnswerAlert;
