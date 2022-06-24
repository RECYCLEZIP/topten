import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSetRecoilState } from "recoil";
import { currentGameState } from "../../stores/atoms";
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
            STAGE 1
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
            마지막 단계까지 도전하세요!
          </Typography>
          <ResultButton onClick={() => navigate("/game/ranking")}>
            랭킹으로
          </ResultButton>
          <GameButton
            onClick={() => {
              setGameState(initialState.gameState.PLAYING);
              setTimeLeft(30);
            }}
          >
            다시하기
          </GameButton>
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
