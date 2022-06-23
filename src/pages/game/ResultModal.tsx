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
  height: "5.5rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
  fontWeight: 700,
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
          <Typography id="modal-modal-title">당신의 점수는</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {score}
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
