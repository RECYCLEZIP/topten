import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  GameBar,
  GameBox,
  GameContainer,
  GameLevel,
  DragTrashContainer,
  DropTrashContainer,
  GameDescription,
  BgmIcon,
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
import wrongBgm from "../../assets/wrong.mp3";
import { getData } from "../../api";
import { GameDataType } from "../../types/Game";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

// Game initial state
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

// Game component
function Game() {
  // Game data
  const [trash, setTrash] = useState<GameDataType[]>([]);
  const [bins, setBins] = useState<GameDataType[]>([]);
  // Trash image visibility state
  const [visibility, setVisibility] = useState(["visibility"]);
  // Game score
  const [score, setScore] = useState(initialState.totalScore);
  // Current game situation state
  const [gameState, setGameState] = useRecoilState(currentGameState);
  // Game left time state
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  // Game level state
  const [level, setLevel] = useRecoilState(gameLevelState);
  // Left trash state
  const [leftTrash, setLeftTrash] = useState<boolean[]>([false]);
  // Loading state
  const [loading, setLoading] = useState(false);
  // Number to multiply state
  const [bonus, setBonus] = useState(0);
  // Bgm on/off
  const [bgmOff, setBgmOff] = useState(false);

  // Game music ref
  const bgmMusic = useRef(new Audio(bgm));
  const selectMusic = useRef(new Audio(selectBgm));
  const wrongMusic = useRef(new Audio(wrongBgm));

  // If drag end, execute
  const onDragEnd = (info: DropResult) => {
    // Dragging target information
    const { destination, source } = info;
    // stop playing music
    const selectBgm = selectMusic.current;
    const wrongBgm = wrongMusic.current;
    selectBgm.pause();
    selectBgm.currentTime = 0;
    wrongBgm.pause();
    wrongBgm.currentTime = 0;
    // If drag not droppable, execute
    if (!destination) return;
    // If not correct, execute
    if (destination.droppableId !== source.droppableId) {
      if (bgmOff) {
        return;
      }
      return wrongBgm.play();
    }
    // If correct, execute
    if (destination.droppableId === source.droppableId) {
      if (!bgmOff) {
        selectBgm.play();
      }
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

  // If left trash change, execute
  useEffect(() => {
    if (!leftTrash.includes(false)) {
      setGameState(initialState.gameState.WIN);
    }
  }, [leftTrash]);

  // If level change, execute
  useEffect(() => {
    setLoading(false);
    // Get each level's game data function
    const getLevelData = async () => {
      try {
        const res = await getData(`quizzes/game/${level - 1}`);
        setTrash(res.data.trash);
        setBins(res.data.bins);
        setLeftTrash(Array(res.data.trash.length).fill(false));
        setVisibility(Array(trash.length).fill("visible"));
        setLoading(true);
      } catch (err: any) {
        customToastify("error", err?.response?.data?.message);
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

  // If game state change, execute
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
    // timer
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
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 게임</title>
      </Helmet>
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
                <GameBox width="30%">
                  <span>TIME</span>
                  <span>{timeLeft}</span>
                </GameBox>
                {bgmOff ? (
                  <BgmIcon
                    src={img.notBgm}
                    onClick={() => {
                      setBgmOff((prev) => !prev);
                      bgmMusic.current.play();
                    }}
                  ></BgmIcon>
                ) : (
                  <BgmIcon
                    src={img.playBgm}
                    onClick={() => {
                      setBgmOff((prev) => !prev);
                      bgmMusic.current.pause();
                    }}
                  ></BgmIcon>
                )}
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
                <BinZone bin={bin} key={index} />
              ))}
            </DropTrashContainer>
          </GameContainer>
        </DragDropContext>
      )}
    </>
  );
}

export default Game;
