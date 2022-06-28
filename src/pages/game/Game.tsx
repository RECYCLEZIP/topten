import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  GameBar,
  GameBox,
  GameContainer,
  GameLevel,
  DragTrashContainer,
  DropTrashContainer,
  GameDescription,
} from "../../styles/gameStyles/game";
import TrashZone from "./TrashZone";
import { resetServerContext } from "react-beautiful-dnd";
import { img } from "../../assets/imgImport";
import { useEffect, useRef, useState } from "react";
import BinZone from "./BinZone";
import GameModal from "./GameModal";
import { useRecoilState } from "recoil";
import { currentGameState, gameLevelState } from "../../stores/atoms";
import ResultModal from "./ResultModal";
import bgm from "../../assets/bgm.mp3";
import selectBgm from "../../assets/select.mp3";
import { getData } from "../../api";
import { GameDataType } from "../../types/Game";
import { customTostify } from "../../components/customTostify";

export const initialState = {
  totalScore: 0,
  gameState: {
    READY: "ready",
    PLAYING: "playing",
    GAMEOVER: "gameover",
    WIN: "win",
  },
  timeLeft: 30,
  gameLevel: 1,
};

resetServerContext();

function Game() {
  const [trash, setTrash] = useState<GameDataType[]>([]);
  const [bins, setBins] = useState<GameDataType[]>([]);

  const [visibility, setVisibility] = useState(["visibility"]);
  const [score, setScore] = useState(initialState.totalScore);
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [level, setLevel] = useRecoilState(gameLevelState);
  const [leftTrash, setLeftTrash] = useState<boolean[]>([false]);
  const [loading, setLoading] = useState(false);
  const [bonus, setBonus] = useState(0);

  const bgmMusic = useRef(new Audio(bgm));
  const selectMusic = useRef(new Audio(selectBgm));

  const onDragEnd = (info: DropResult) => {
    const selectBgm = selectMusic.current;
    const { destination, source } = info;
    selectBgm.pause();
    selectBgm.currentTime = 0;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      selectBgm.play();
      const newArr = [...visibility];
      newArr[source.index] = "hidden";
      setVisibility(newArr);
      setScore((prev) => prev + 40);
      const newLeftTrash = [...leftTrash];
      newLeftTrash[source.index] = true;
      setLeftTrash(newLeftTrash);
    }
  };

  useEffect(() => {
    setGameState(initialState.gameState.READY);
    setTimeLeft((prev) => prev);
    setLevel(1);
    setScore(0);
    const bgmAudio = bgmMusic.current;
    bgmAudio.volume = 0.5;
    bgmAudio.loop = true;
    bgmAudio.play();
    return () => {
      bgmAudio.pause();
      bgmAudio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (!leftTrash.includes(false)) {
      setGameState(initialState.gameState.WIN);
    }
  }, [leftTrash]);

  useEffect(() => {
    setLoading(false);
    const getLevelData = async () => {
      try {
        const res = await getData(`quizzes/game/${level - 1}`);
        setTrash(res.data.trash);
        setBins(res.data.bins);
        setLeftTrash(Array(res.data.trash.length).fill(false));
        setVisibility(Array(trash.length).fill("visible"));
        setLoading(true);
      } catch (err: any) {
        customTostify("error", err.message);
      }
    };
    if (level === 0) {
      const bgmAudio = bgmMusic.current;
      bgmAudio.volume = 0.5;
      bgmAudio.loop = true;
      bgmAudio.play();
      setLevel(1);
    } else {
      getLevelData();
      if (level === 1) {
        setScore(0);
      } else {
        setScore(Math.round(score * bonus));
      }
    }
  }, [level]);

  useEffect(() => {
    const bgmAudio = bgmMusic.current;
    if (
      gameState === initialState.gameState.GAMEOVER ||
      gameState === initialState.gameState.WIN
    ) {
      const multiply = timeLeft / 30 + 1;
      setBonus(Number(multiply.toFixed(2)));
    }
    if (gameState === initialState.gameState.GAMEOVER) {
      bgmAudio.pause();
      bgmAudio.currentTime = 0;
    }
    const timer = setInterval(() => {
      if (timeLeft > 0 && gameState === initialState.gameState.PLAYING)
        setTimeLeft((prev) => prev - 1);
      if (timeLeft <= 0) {
        clearInterval(timer);
        setGameState(initialState.gameState.GAMEOVER);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {gameState === initialState.gameState.READY && <GameModal />}
      {(gameState === initialState.gameState.GAMEOVER ||
        gameState === initialState.gameState.WIN) && (
        <ResultModal score={score} bonus={bonus} setTimeLeft={setTimeLeft} />
      )}
      {gameState === initialState.gameState.PLAYING && (
        <DragDropContext onDragEnd={onDragEnd}>
          <GameContainer Img={img.levelImg[level - 1]}>
            <GameBar>
              <GameLevel>STAGE {level}</GameLevel>
              <GameDescription>
                <GameBox>
                  <span>SCORE</span>
                  <span>{score}</span>
                </GameBox>
                <GameBox>
                  <span>TIME</span>
                  <span>{timeLeft}</span>
                </GameBox>
              </GameDescription>
            </GameBar>
            <DragTrashContainer>
              {trash.map((data, index) => (
                <TrashZone
                  data={data}
                  index={index}
                  key={index}
                  visibility={visibility}
                />
              ))}
            </DragTrashContainer>
            <DropTrashContainer>
              {bins.map((bin, index) => (
                <BinZone index={bin.category} bin={bin} key={index} />
              ))}
            </DropTrashContainer>
          </GameContainer>
        </DragDropContext>
      )}
    </>
  );
}

export default Game;
