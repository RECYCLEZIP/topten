import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { GameContainer } from "../../styles/gameStyles/game";
import TrashZone from "./TrashZone";
import { resetServerContext } from "react-beautiful-dnd";
import { img } from "../../assets/imgImport";
import { useState } from "react";
import BinZone from "./BinZone";
import { TitleText } from "../../styles/TextStyle";

function Game() {
  const initialData = {
    garbage: [],
    bin: [{ id: "플라스틱" }, { id: "유리" }, { id: "일반" }],
    totalScore: 0,
  };
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

  const [score, setScore] = useState(initialData.totalScore);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      setDatas((prev) => {
        const arr = [...prev];
        arr.splice(source.index, 1);
        return [...arr];
      });
      setScore((prev) => prev + 40);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GameContainer>
        <TitleText>score: {score}</TitleText>
        {datas.map((data, index) => (
          <TrashZone data={data} index={index} key={index} />
        ))}
        <div>
          {datas2.map((data, index) => (
            <BinZone id={data.type} data={data} key={index} />
          ))}
        </div>
      </GameContainer>
    </DragDropContext>
  );
}

export default Game;
