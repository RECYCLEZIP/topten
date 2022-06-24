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
import { useEffect, useState } from "react";
import BinZone from "./BinZone";
import GameModal from "./GameModal";
import { useRecoilState } from "recoil";
import { currentGameState } from "../../stores/atoms";
import ResultModal from "./ResultModal";

export const initialState = {
  totalScore: 0,
  gameState: { READY: "ready", PLAYING: "playing", DONE: "done" },
  timeLeft: 30,
  tree: { small: img.tree.small, middle: img.tree.middle, big: img.tree.big },
  gameLevel: 1,
};

function Game() {
  const [datas, setDatas] = useState([
    { type: "플라스틱", img: img.camera },
    { type: "유리", img: img.camera },
    { type: "일반", img: img.camera },
    { type: "음식물", img: img.camera },
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

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      const newArr = [...visibility];
      newArr[source.index] = "hidden";
      setVisibility(newArr);
      setScore((prev) => prev + 40);
    }
  };

  useEffect(() => {
    setGameState(initialState.gameState.READY);
    setTimeLeft(initialState.timeLeft);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && gameState === initialState.gameState.PLAYING)
        setTimeLeft((prev) => prev - 1);
      if (timeLeft <= 0) {
        clearInterval(timer);
        setGameState(initialState.gameState.DONE);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  resetServerContext();

  return (
    <>
      {gameState === initialState.gameState.READY && <GameModal />}
      {gameState === initialState.gameState.DONE && (
        <ResultModal score={score} setTimeLeft={setTimeLeft} />
      )}
      {gameState === initialState.gameState.PLAYING && (
        <DragDropContext onDragEnd={onDragEnd}>
          <GameContainer>
            <GameBar>
              <GameLevel>STAGE 1</GameLevel>
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
