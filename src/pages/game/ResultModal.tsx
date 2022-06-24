import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentGameState, gameLevelState } from "../../stores/atoms";
import { initialState } from "./Game";
import { useNavigate } from "react-router";
import { GameButton, ResultButton } from "../../styles/gameStyles/game";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "8rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
  textAlign: "center",
};

function ResultModal({
  score,
  setTimeLeft,
}: {
  score: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}) {
  const navigate = useNavigate();
  const setGameState = useSetRecoilState(currentGameState);
  const [level, setLevel] = useRecoilState(gameLevelState);

  const handleClose = () => {
    setGameState(initialState.gameState.PLAYING);
    navigate("/game/ranking");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ fontWeight: 700, color: "#dd0000" }}
          >
            GAME OVER
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontWeight: 700, mt: 1 }}
          >
            STAGE {level}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 0.3, fontSize: "0.8rem", fontWeight: 700 }}
          >
            {score} 점
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontSize: "0.8rem", fontWeight: 700 }}
          >
            {level !== 3
              ? "마지막 단계까지 도전하세요!"
              : "오늘도 환경보호에 기여하셨습니다!"}
          </Typography>
          <ResultButton onClick={() => navigate("/game/ranking")}>
            랭킹으로
          </ResultButton>
          <GameButton
            onClick={() => {
              if (level !== 3) {
                setLevel((prev) => prev + 1);
              }
              if (level === 3) {
                setLevel(1);
              }
              setGameState(initialState.gameState.PLAYING);
              setTimeLeft(30);
            }}
          >
            {level !== 3 ? "다음 레벨" : "다시하기"}
          </GameButton>
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
