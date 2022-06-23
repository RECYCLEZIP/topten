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

  const [visibility, setVisibility] = useState(
    Array(datas.length).fill("visible"),
  );

  const [score, setScore] = useState(initialData.totalScore);

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
  resetServerContext();
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GameContainer>
        <TitleText>score: {score}</TitleText>
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
  );
}

export default Game;
