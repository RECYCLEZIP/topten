import { useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TrashCard } from "../../styles/gameStyles/game";
import { GameDataType } from "../../types/Game";

function TrashImg({
  data,
  index,
  visibility,
}: {
  data: GameDataType;
  index: number;
  visibility: string[];
}) {
  const left = useMemo(() => Math.random() * 90, []);
  const top = useMemo(() => Math.random() * 90, []);
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(magic, snapshot) => {
        return (
          <TrashCard
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
            left={`${left}%`}
            top={`${top}%`}
            img={data.image}
            visibility={visibility[index]}
          ></TrashCard>
        );
      }}
    </Draggable>
  );
}

export default TrashImg;
