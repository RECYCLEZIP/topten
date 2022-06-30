import { useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TrashCard } from "../../styles/gameStyles/game";
import { GameDataType } from "../../types/Game";

// Game trash image component
function TrashImg({
  data,
  index,
  visibility,
}: {
  data: GameDataType;
  index: number;
  visibility: string[];
}) {
  // Trash image location random
  const left = useMemo(() => Math.random() * 90, []);
  const top = useMemo(() => Math.random() * 90, []);

  // Delete return to original position animation
  function getStyle(style: any, snapshot: any) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`,
      opacity: "0",
    };
  }

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <TrashCard
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyle(provided.draggableProps.style, snapshot)}
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
