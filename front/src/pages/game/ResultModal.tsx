import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { currentGameState, gameLevelState } from "../../stores/atoms";
import { initialState } from "./Game";
import { useNavigate } from "react-router";
import { GameButton, ResultButton } from "../../styles/gameStyles/game";
import gameOverBgm from "../../assets/gameover.mp3";
import { putData } from "../../api";
import { customToastify } from "../../components/customToastify";

// Game result modal style
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "8.7rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
  textAlign: "center",

  "@media (min-width: 768px)": {
    height: "8rem",
  },
};

// Game result modal
function ResultModal({
  score,
  bonus,
  setTimeLeft,
}: {
  score: number;
  bonus: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}) {
  const navigate = useNavigate();
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const [level, setLevel] = useRecoilState(gameLevelState);

  const handleClose = () => {
    setGameState(initialState.gameState.PLAYING);
    navigate("/game/ranking");
  };

  // Score update function
  const updateScore = async () => {
    try {
      putData("users/score", { score: Math.round(score * bonus) });
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  // Game over bgm
  const bgm = useRef(new Audio(gameOverBgm));

  useEffect(() => {
    if (gameState === initialState.gameState.GAMEOVER) {
      const bgmAudio = bgm.current;
      bgmAudio.play();
      return () => {
        bgmAudio.pause();
        bgmAudio.currentTime = 0;
      };
    }
  }, []);

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
            sx={{
              fontWeight: 700,
              color:
                gameState === initialState.gameState.GAMEOVER
                  ? "#dd0000"
                  : "#21A663",
            }}
          >
            {gameState === initialState.gameState.GAMEOVER
              ? "GAME OVER"
              : "GAME CLEAR!"}
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
            {score}X{bonus} = {Math.round(score * bonus)} 점
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontSize: "0.8rem", fontWeight: 700 }}
          >
            {level !== 3
              ? "마지막 단계까지 도전하세요!"
              : "오늘도 환경보호에 기여하셨습니다!"}
          </Typography>
          <ResultButton
            onClick={() => {
              updateScore();
              navigate("/game/ranking");
            }}
          >
            랭킹으로
          </ResultButton>
          <GameButton
            onClick={(e) => {
              if (gameState === initialState.gameState.GAMEOVER) {
                setLevel(0);
              } else if (level !== 3) {
                setLevel((prev) => prev + 1);
              }
              if (level === 3) {
                setLevel(0);
              }
              setGameState(initialState.gameState.PLAYING);
              setTimeLeft(30);
              updateScore();
            }}
          >
            {level !== 3
              ? gameState === initialState.gameState.WIN
                ? "다음 레벨"
                : "다시하기"
              : "다시하기"}
          </GameButton>
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
