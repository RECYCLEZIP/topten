import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSetRecoilState } from "recoil";
import { currentGameState } from "../../stores/atoms";
import { initialState } from "./Game";
import { GameButton } from "../../styles/gameStyles/game";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "5rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  fontWeight: 700,
  textAlign: "center",
};

function GameModal() {
  const setGameState = useSetRecoilState(currentGameState);
  const handleClose = () => setGameState(initialState.gameState.PLAYING);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">분리수거 게임</Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "0.8rem" }}
          >
            쓰레기들을 알맞은 쓰레기통에 넣어주세요!
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
