import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { CorrectAnswer } from "../../styles/quizStyles/QuizzesStyle";
import { AlertType } from "../../types/QuizTypes/QuizResultType";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

function AnswerAlert({ setResult, answer }: AlertType) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setResult((cur) => !cur);
  };

  return (
    <Stack spacing={2}>
      <CorrectAnswer
        onClick={() => {
          handleClick();
        }}
      >
        정답 확인
      </CorrectAnswer>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={1500}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon
                fontSize="inherit"
                sx={{ height: "0.9rem", width: "0.9rem" }}
              />
            </IconButton>
          }
          onClose={handleClose}
          severity={answer ? "success" : "error"}
          sx={{ fontSize: "0.7rem" }}
          icon={false}
        >
          {answer ? "정답입니다!" : "틀렸습니다!"}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AnswerAlert;
