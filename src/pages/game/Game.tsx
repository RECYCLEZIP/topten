import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
  GameBar,
  GameBox,
  GameContainer,
  GameLevel,
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

export const initialState = {
  totalScore: 0,
  gameState: {
    READY: "ready",
    PLAYING: "playing",
    GAMEOVER: "gameover",
    WIN: "win",
  },
  timeLeft: 30,
  tree: { small: img.tree.small, middle: img.tree.middle, big: img.tree.big },
  gameLevel: 1,
};

resetServerContext();

function Game() {
  const [datas, setDatas] = useState([
    { type: "플라스틱", img: img.camera },
    { type: "유리", img: img.camera },
    { type: "일반", img: img.camera },
    { type: "일반", img: img.camera },
  ]);
  const datas2 = [
    { type: "플라스틱", img: img.camera },
    { type: "유리", img: img.camera },
    { type: "일반", img: img.camera },
  ];

  const [visibility, setVisibility] = useState(
    Array(datas.length).fill("visible"),
  );
  const [score, setScore] = useState(initialState.totalScore);
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [level, setLevel] = useRecoilState(gameLevelState);
  const [leftTrash, setLeftTrash] = useState<boolean[]>(
    Array(datas.length).fill(false),
  );

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
    setTimeLeft(initialState.timeLeft);
    setLevel(1);
    setScore(0);
  }, []);

  useEffect(() => {
    if (!leftTrash.includes(false)) {
      setGameState(initialState.gameState.WIN);
    }
  }, [leftTrash]);

  useEffect(() => {
    setTimeLeft(initialState.timeLeft);
    if (level === 1) {
      setScore(0);
    }
  }, [level]);

  useEffect(() => {
    const bgmAudio = bgmMusic.current;
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

  useEffect(() => {
    const bgmAudio = bgmMusic.current;
    bgmAudio.volume = 0.5;
    bgmAudio.loop = true;
    bgmAudio.play();
    return () => {
      bgmAudio.pause();
      bgmAudio.currentTime = 0;
    };
  }, []);

  return (
    <>
      {gameState === initialState.gameState.READY && <GameModal />}
      {(gameState === initialState.gameState.GAMEOVER ||
        gameState === initialState.gameState.WIN) && (
        <ResultModal score={score} setTimeLeft={setTimeLeft} />
      )}
      {gameState === initialState.gameState.PLAYING && (
        <DragDropContext onDragEnd={onDragEnd}>
          <GameContainer>
            <GameBar>
              <GameLevel>STAGE {level}</GameLevel>
              <GameBox>
                <span>SCORE</span>
                <span>{score}</span>
              </GameBox>
              <GameBox>
                <span>TIME</span>
                <span>{timeLeft}</span>
              </GameBox>
            </GameBar>
            {/* <TitleText>점수: {score}</TitleText>
            <TitleText>시간: {timeLeft}</TitleText> */}
            <div style={{ height: "50vh", position: "relative" }}>
              {datas.map((data, index) => (
                <TrashZone
                  data={data}
                  index={index}
                  key={index}
                  visibility={visibility}
                />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {datas2.map((data, index) => (
                <BinZone index={data.type} data={data} key={index} />
              ))}
            </div>
          </GameContainer>
        </DragDropContext>
      )}
    </>
  );
}

export default Game;
