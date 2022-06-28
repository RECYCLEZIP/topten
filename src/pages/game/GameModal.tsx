import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSetRecoilState } from "recoil";
import { currentGameState } from "../../stores/atoms";
import { initialState } from "./Game";
import { GameButton } from "../../styles/gameStyles/game";
import { useMediaQuery } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "8.2rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  textAlign: "center",
};

const webStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "6.5rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  textAlign: "center",
};

function GameModal() {
  const setGameState = useSetRecoilState(currentGameState);
  const handleClose = () => setGameState(initialState.gameState.PLAYING);
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isMobile ? webStyle : style}>
          <Typography id="modal-modal-title" sx={{ fontWeight: 700 }}>
            분리수거 게임
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "0.8rem", fontWeight: 700 }}
          >
            쓰레기들을 알맞은 쓰레기통에 넣어주세요! <br />
            빨리 분리할수록 점수가 높아져요!
          </Typography>
          <GameButton
            onClick={() => setGameState(initialState.gameState.PLAYING)}
          >
            Start!
          </GameButton>
        </Box>
      </Modal>
    </div>
  );
}

export default GameModal;
